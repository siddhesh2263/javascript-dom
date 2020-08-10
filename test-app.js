var titles = document.getElementsByClassName('title');

console.log(Array.isArray('title'));

// Convert HTMLCollecton to Array
console.log(Array.isArray(Array.from(titles)));


// Convert titles to Array
Array.from(titles).forEach(function(item) {
  console.log(item);
});


var lis = document.getElementsByTagName('li');
lis = Array.from(lis);

lis.forEach((item) => {
    console.log(item);
});


// ====================================================================



const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
// console.log(books);

books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach((book) => {
    console.log(book);
});