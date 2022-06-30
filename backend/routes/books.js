const { Router } = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');

const Book = require('../models/Book');

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post('/', async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = '/uploads/' + req.file.filename;
  const newBook = new Book({ title, author, imagePath, isbn });
  await newBook.save();
  res.json({ message: 'Book created' });
});

router.delete('/:id', async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  //eliminar el archivo de la carpeta uploads, path.resolve es para que la ruta sea relativa desde la crapeta principal
  unlink(path.resolve('./backend/public' + book.imagePath));
  res.json({ message: 'Book deleted', book: book.isbn });
});

module.exports = router;