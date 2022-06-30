class BookServices {
    constructor() {
        this.URL = '/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URL);
        const books = await response.json();
        return books;
    }

    async postBook(book) {
        const response = await fetch(this.URL, {
            method: 'POST',
            body: book,
        });
        const datos = await response.json();
        console.log(datos);
    }

    async deleteBook(bookId) {
        const response = await fetch(`${this.URL}/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const datos = await response.json();
    }
}

module.exports = BookServices;