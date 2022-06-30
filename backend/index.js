if (process.env.NODE_ENV !== 'production') {
  console.log('🔵' + process.env.NODE_ENV);
  require('dotenv').config();
}

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//initialize express app
const app = express();
// eslint-disable-next-line no-unused-vars
const database = require('./database'); //is neccesary to connect to the database

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors()); //allows cross-origin requests
app.use(morgan('dev'));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname);
  }
});
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/api/books', require('./routes/books'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start at server
app.listen(app.get('port'), () => {
  console.log('---------------------------------------');
  console.log('Server started at port', app.get('port'));
});
