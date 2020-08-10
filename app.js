const bookList = document.querySelector('#book-list');

console.log('book-list has next sibling: ', bookList.nextSibling);
// Returns the line-break text node.

console.log('book-list next element sibling: ', bookList.nextElementSibling);
// Gets the next element at the same level


console.log('book-list has previous sibling: ', bookList.previousSibling);
console.log('book-list previous element sibling: ', bookList.previousElementSibling);


bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for anyone else';
// We accessed the previous sibling using bookList and changes its content