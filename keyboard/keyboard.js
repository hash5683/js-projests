// Select all buttons with class 'btn'
let buttons = document.querySelectorAll('.btn');
// Select the delete button with class 'delete'
let delBtn = document.querySelector('.delete');
//select the shift button with class 'shift'
let shiftBtn = document.querySelector('.shift');
// select the space button with class 'space'
let spaceBtn = document.querySelector('.space');
// Initialize string variable
let string = '';

// Add click event listeners to all buttons with class 'btn'
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        string += e.target.innerHTML;
        document.querySelector('input').value = string;
    });
});

// Add click event listener to the delete button
delBtn.addEventListener('click', (e) => {
    let currentString = document.querySelector('input').value; 
    if (currentString.length > 0) {
        let newString = currentString.slice(0, -1);
        document.querySelector('input').value = newString;
        string = newString;
    }
});

// Add click event listener to the shift button
shiftBtn.addEventListener('click', (e) => {
    let currentString = document.querySelector('input').value;
    if (currentString.length > 0) {
        let newString = currentString.toUpperCase();
        document.querySelector('input').value = newString;
        string = newString;
    }
});

spaceBtn.addEventListener('click', (e) => {
    let currentString = document.querySelector('input').value;
    if (currentString.length >= 0) {
        let newString = currentString +' ';
        document.querySelector('input').value = newString;
        string = newString;
    
}});
