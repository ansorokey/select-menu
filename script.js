const selectField = document.querySelector('#select-field');
const selectText = document.querySelector('#select-text');
const list = document.querySelector('#list');
const arrow = document.querySelector('#arrow');
const options = document.querySelectorAll('.options');

// Add an event listener to each option
// set the text in the select field to the list's content
// hide/show the list
// rotate the arrow
options.forEach(op => {
    // remember that arrow functions have certain runtime bindings
    // so the context would not apply to that specific item
    op.onclick = () => {
        selectText.innerHTML = op.textContent;
        list.classList.toggle('hide');
        arrow.classList.toggle('rotate');
    }
})

// Clicking on the select element hides the list and rotates the arrow
selectField.onclick = function() {
    list.classList.toggle('hide');
    arrow.classList.toggle('rotate');
}
