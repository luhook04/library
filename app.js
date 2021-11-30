// create variables and references
const addBtn = document.getElementById('addBook');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('form');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const inputRead = document.getElementById('read');
let myLibrary = [];

// opens the form when user clicks on button
addBtn.onclick = function() {
  document.querySelector('#pop-up').style.display = 'block';
};

const hideForm = () => {
  document.querySelector('#pop-up').style.display = 'none';
};

// closes the form when user clicks on X
closeBtn.addEventListener('click', hideForm);

// class constructer
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// takes the values from the form and inputs them into the constructor function
// takes the return object and pushes it into the myLibrary array
function addToMyLibrary() {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value + ' pages';
  let read = inputRead.checked;
  myLibrary.push(new Book(title, author, pages, read));
  renderLibrary();
  clearInput();
}

//Clears form input
function clearInput() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;
}

// add event listener on form submit
form.addEventListener('submit', addToMyLibrary);
form.addEventListener('submit', hideForm);

// removes the previous books divs and appends the entire new library array to the library
const renderLibrary = () => {
  const books = document.querySelectorAll('.book');
  books.forEach((book) => {
    document.querySelector('#library-container').removeChild(book);
  });
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
};

// create elements to form the book div
const createBook = (item) => {
  const library = document.querySelector('#library-container');
  const bookDisplay = document.createElement('div');
  const titleDisplay = document.createElement('h2');
  const authorDisplay = document.createElement('h3');
  const pagesDisplay = document.createElement('h3');
  const readDisplay = document.createElement('button');
  const removeBtn = document.createElement('button');

  // Gives each display text content and a class
  titleDisplay.textContent = item.title;
  titleDisplay.classList.add('title');
  authorDisplay.textContent = item.author;
  authorDisplay.classList.add('author');
  pagesDisplay.textContent = item.pages;
  pagesDisplay.classList.add('pages');
  readDisplay.textContent = item.read;
  readDisplay.classList.add('read');
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('id', 'removeBtn');

  // Append to the book element and then append book to library
  bookDisplay.appendChild(titleDisplay);
  bookDisplay.appendChild(authorDisplay);
  bookDisplay.appendChild(pagesDisplay);
  bookDisplay.appendChild(readDisplay);
  if (item.read == false) {
    readDisplay.textContent = 'Not Read';
    readDisplay.style.backgroundColor = 'Red';
  }
  else {
    readDisplay.textContent = 'Read';
    readDisplay.style.backgroundColor = 'Green';
  }
  bookDisplay.appendChild(removeBtn);
  bookDisplay.classList.add('book');
  library.appendChild(bookDisplay);

  readDisplay.addEventListener('click', () => {
    item.read = !item.read;
    renderLibrary();
  });

  removeBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    renderLibrary();
  });
};
