const button = document.querySelector('.add');
let card = document.querySelector('.book__pop');
let pop = document.querySelector('.book__pop');
const form = document.getElementById('book-form');

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
const btn = document.getElementById('btn-info');
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
	+count;
	console.log(myLibrary);
};

btn.addEventListener('click', function () {
	submitInfo(form);
	form.reset();
	close();
});
// Information entered will be stored in an object
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

// the object will be stored in an array
function addBookToLibrary(book) {
	myLibrary.push(book);
}
// the information bar will be updated with the details the user entered
// A card will appear showing the information the user entered
