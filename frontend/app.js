require('./styles/styles.css');
const UI = require('./UI');
const ui = new UI();

addEventListener('DOMContentLoaded', () => {
  ui.renderBooks();
});

const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formDatos = new FormData(form);
  ui.addANewbook(formDatos);
});

document.getElementById('books-cards-container').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete-card-btn')) {
    ui.deleteBook(e.target.getAttribute('_id'));
  }
});