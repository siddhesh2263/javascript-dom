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

// =======================================================================


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


// ==================================================================


const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is: ', banner.nodeType);
console.log('#page-banner node name is: ', banner.nodeName);
console.log('#page-banner has child nodes: ', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
// By passing true, the nested elements are also cloned.
// Otherwise, only the div tag is cloned
console.log(clonedBanner);


// ===================================================================


const bookList = document.querySelector('#book-list');
// console.log('The parent node of bookList is: ', bookList.parentNode);

// console.log('Parent element is: ', bookList.parentElement.parentElement);

// Getting children
console.log(bookList.childNodes);
// In the output, the text child node indicates the line-break.

console.log(bookList.children);
// This wil get the child elements, and not the line-break text nodes.


// ======================================================================


const bookList = document.querySelector('#book-list');

console.log('book-list has next sibling: ', bookList.nextSibling);
// Returns the line-break text node.

console.log('book-list next element sibling: ', bookList.nextElementSibling);
// Gets the next element at the same level


console.log('book-list has previous sibling: ', bookList.previousSibling);
console.log('book-list previous element sibling: ', bookList.previousElementSibling);


bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for anyone else';
// We accessed the previous sibling using bookList and changes its content


// =============================================================================


var btns = document.querySelectorAll('#book-list .delete');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const li_target = e.target.parentElement;
        li_target.parentNode.removeChild(li_target);
        // Capture the parent element of the button
        // then get the parent node and delete the child li tag
    });
});


const link = document.querySelector('#book-list a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, ' was prevented');
});