const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {
    if(e.target.className == 'delete') {
        const li_target = e.target.parentElement;
        list.removeChild(li_target);
    }
});