books = document.querySelectorAll('#book-list li .name');

// The above line will return a NodeList, and forEach loop can be applied on it
// without converting it to Array. However a HTMLCollection needs to be converted
// into an Array.

books.forEach((book) => {
    console.log(book.textContent);
});

books.forEach((book) => {
    book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');
// Grabs all the HTML code inside the <div id=book-list> section
console.log(bookList.innerHTML);

bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how we add HTML</p>';