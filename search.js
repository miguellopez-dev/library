async function getResponse(title, author) {
    console.log('url', title, '+inauthor:', author);
    const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=' +
            title +
            '+inauthor:' +
            author,

        {
            method: 'GET',
        }
    );

    const data = await response.json();
    console.log(data.items[0].volumeInfo.title);
    console.log(data.items[0].volumeInfo.authors[0]);
    console.log('pages:', data.items[0].volumeInfo.pageCount);
}

getResponse('educated');
