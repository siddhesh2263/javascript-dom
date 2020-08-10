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