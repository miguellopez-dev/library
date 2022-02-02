const button = document.querySelector('.add');
let card = document.querySelector('.book__pop');
let pop = document.querySelector('.book__pop');
const form = document.getElementById('book-form');

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
		close();
		form.reset();
	}
};
// User will enter 'Title' 'Author' 'Pages' and whether they have read the book
// Information entered will be stored in an object
// the object will be stored in an array
// the information bar will be updated with the details the user entered
// A card will appear showing the information the user entered
