const bookList = document.querySelector('#book-list');
// console.log('The parent node of bookList is: ', bookList.parentNode);

// console.log('Parent element is: ', bookList.parentElement.parentElement);

// Getting children
console.log(bookList.childNodes);
// In the output, the text child node indicates the line-break.

console.log(bookList.children);
// This wil get the child elements, and not the line-break text nodes.