import AwesomeBook from './classes.js';

const awesomeBook = new AwesomeBook();

// Local storage
const saveToLocalStorage = () => {
  localStorage.setItem('newBook', JSON.stringify(awesomeBook.books));
};
const localBooks = JSON.parse(localStorage.getItem('newBook'));

if (localBooks) {
  awesomeBook.books = localBooks;
}

export { awesomeBook, saveToLocalStorage };