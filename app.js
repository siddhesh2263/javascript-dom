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
    console.log(value);
});