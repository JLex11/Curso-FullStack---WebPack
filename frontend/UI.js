const BookServices = require('./services/bookServices');
const bookService = new BookServices();
const { format } = require('timeago.js');

class UI {
  async renderBooks() {
    console.log('rendering books');
    const books = await bookService.getBooks();
    const booksCardsContainer = document.getElementById('books-cards-container');

    const fragment = document.createDocumentFragment();

    booksCardsContainer.innerHTML = '';
    books.forEach(book => {
      const elementDiv = document.createElement('div');
      elementDiv.classList.add('card');
      elementDiv.innerHTML = `
        <div class="card-body">
          <div class="card-image">
            <img src="${book.imagePath}" alt="${book.title}">
          </div>
          <div class="card-info">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.author}</p>
            <p class="card-isbn">${book.isbn}</p>
            <a href="#" class="delete-card-btn" _id="${book._id}">Delete</a>
          </div>
        </div>
        <div class="card-footer">
            <span>${format(book.create_at)}</span>
        </div>
      `;

      fragment.appendChild(elementDiv);
    });
    booksCardsContainer.appendChild(fragment);
  }

  async addANewbook(book) {
    await bookService.postBook(book);
    this.clearBookForm();
    this.renderBooks();
  }

  clearBookForm() {
    document.getElementById('book-form').reset();
  }

  renderMsg(msg, type) {}

  async deleteBook(id) {
    bookService.deleteBook(id);
    this.renderBooks();
  }
}

module.exports = UI;
