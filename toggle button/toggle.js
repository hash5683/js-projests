let botton = document.querySelector('#toggle');
let mode = 'light';
botton.addEventListener('click', () => {
    if (mode === 'light') {
        mode = 'black';
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('h1').style.color = "white";
    } else {
        mode = 'light';
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('h1').style.color = "green";
    }
    console.log(mode);
});
