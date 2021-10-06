// create variables and references
const addBtn = document.getElementById('addBook');
const form = document.getElementById('form');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const inputRead = document.getElementById('read');
let myLibrary = [];

// constructor function to make book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToMyLibrary() {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let read;
  if (inputRead.checked == true) {
    read = 'Read';
  }
  else {
    read = 'Not Read';
  }
  myLibrary.push(new Book(title, author, pages, read));
  clearInput();
}

form.addEventListener('submit', addToMyLibrary);

function clearInput() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;
}
