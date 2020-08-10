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

});