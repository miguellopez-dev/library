const button = document.querySelector('.add');
const card = document.querySelector('.book__pop');
const pop = document.querySelector('.book__pop');
const form = document.getElementById('book-form');
let totalBooksHolder = document.querySelectorAll('.book__overall');
let booksReadHolder = document.querySelector('.book__read');
let totalPagesHolder = document.querySelectorAll('.book__pages');
let pagesReadHolder = document.querySelector('.book__pages-read');
const bookShelf = document.querySelector('.shelf');

let pagesRead = 0;
let booksRead = 0;
let totalPages = 0;
let totalBooks = 0;

let myLibrary = [];

// When a user clicks on the add button
// Show a pop up with a form
const open = function () {
	pop.style.display = 'block';
};

const close = function () {
	pop.style.display = 'none';
};
button.addEventListener('click', function () {
	open();
});

window.onclick = function (event) {
	if (event.target == card) {
		form.reset();
		close();
	}
};

// User will enter 'Title' 'Author' 'Pages' and whether they have read the book
let count = 0;
let bookTitle = 'book' + count;

let submitInfo = function () {
	bookTitle = new Book(
		form.title.value,
		form.author.value,
		form.pages.value,
		form.read.checked
	);
	addBookToLibrary(bookTitle);
	addInformationToDetailBar();
	makeCard(bookTitle);
	++count;
};

const bookAdd = (e) => {
	e.preventDefault();
	submitInfo(form);
	form.reset();
	close();
};
form.onsubmit = bookAdd;

// Information entered will be stored in an object
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = parseInt(pages);
	this.read = read;
}

// the object will be stored in an array
function addBookToLibrary(book) {
	myLibrary.push(book);
}
// the information bar will be updated with the details the user entered
function addInformationToDetailBar() {
	totalBooks = myLibrary.length;
	totalBooksHolder.forEach(function (e) {
		e.innerHTML = totalBooks;
	});
	myLibrary.forEach(function (e) {
		if (e.read) {
			++booksRead;
		}
	});
	booksReadHolder.innerHTML = booksRead;
	booksRead = 0;

	myLibrary.forEach((e) => {
		totalPages += e.pages;
	});
	totalPagesHolder.forEach((e) => {
		e.innerHTML = totalPages;
	});
	totalPages = 0;
}

// A card will appear showing the information the user entered
function makeCard(book) {
	let bookCard = document.createElement('div');
	let bookInfo = document.createElement('div');
	let bookTitle = document.createElement('h2');
	let bookAuthor = document.createElement('p');
	let pagesRead = document.createElement('p');
	let buttonHolder = document.createElement('div');
	let isRead = document.createElement('button');
	let btnRemove = document.createElement('button');

	bookCard.className = 'book__card ' + count;
	bookInfo.className = 'book__card-info';
	buttonHolder.className = 'book__button-container';
	btnRemove.className = 'remove';

	bookTitle.innerHTML = book.title;
	bookAuthor.innerHTML = book.author;
	pagesRead.innerHTML = book.pages;
	if (book.read) {
		readSwitchOn(isRead);
	} else {
		readSwitchOff(isRead);
	}
	isRead.onclick = readToggle;
	btnRemove.innerHTML = 'Remove';
	btnRemove.onclick = removeBtn;

	bookShelf.appendChild(bookCard);
	bookCard.appendChild(bookInfo);

	bookInfo.appendChild(bookTitle);
	bookInfo.appendChild(bookAuthor);
	bookInfo.appendChild(pagesRead);

	bookCard.appendChild(buttonHolder);
	buttonHolder.appendChild(isRead);
	buttonHolder.appendChild(btnRemove);
}

function removeBtn(e) {
	e.target.parentNode.parentNode.parentNode.removeChild(
		e.target.parentNode.parentNode
	);

	myLibrary = myLibrary.filter(
		(item) => e.target.parentNode.parentNode.firstChild.innerHTML !== item.title
	);

	addInformationToDetailBar();
}

function readToggle(e) {
	let selection = myLibrary.find(
		(element) =>
			element.title == e.target.parentNode.parentNode.firstChild.innerHTML
	);

	if (e.target.className == 'read') {
		readSwitchOff(e.target);
		selection.read = false;
	} else {
		readSwitchOn(e.target);
		selection.read = true;
	}
	addInformationToDetailBar();
}

function readSwitchOn(e) {
	e.className = 'read';
	e.innerHTML = 'read';
}

function readSwitchOff(e) {
	e.className = 'not-read';
	e.innerHTML = 'not read';
}
