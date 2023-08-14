class AwesomeBook {
  constructor() {
    this.books = [
      {
        id: '1',
        title: 'Handook',
        author: 'Jemson',
      },
      {
        id: '2',
        title: 'To the hole',
        author: 'Jem',
      },
      {
        id: '3',
        title: 'Fly high',
        author: 'Jakson',
      },
      {
        id: '4',
        title: 'HWelcome to India',
        author: 'Ali khan',
      },
    ];
  }

  addBook(title, author) {
    const id = Date.now().toString();
    this.books.push({ id, title, author });
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}

export default AwesomeBook;