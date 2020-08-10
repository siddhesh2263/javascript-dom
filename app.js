const list = document.querySelector('#book-list ul');

// Deleting a book
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete') {
        const li_target = e.target.parentElement;
        list.removeChild(li_target);
    }
});


const addForm = document.forms['add-book'];

// Prevent empty form submission by using preventDefault()
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const value = addForm.querySelector('input[type="text"]').value;

    if(value) {

        // Create elements
        const li_new = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // Add context
        bookName.textContent = value;
        deleteBtn.textContent = 'delete';

        // Add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');
        // You can also use deleteBtn.className = 'delete', but the above implementaion will
        // allow us to add multiple classes in a correct manner.

        // Append to document
        li_new.appendChild(bookName);
        li_new.appendChild(deleteBtn);
        list.appendChild(li_new);

    }

});


// Hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
    if(hideBox.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
});


// Filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li'); // This is a HTMLCollection
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});


// Tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
    if(e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach((panel) => {
            if(panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});