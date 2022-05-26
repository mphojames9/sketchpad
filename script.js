let color = 'black';
let click = true;
let reset = document.getElementById('reset');
let screen = document.getElementById('screen');

function populateBoard(size) {
    let board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let squares = document.querySelectorAll('div');
squares.forEach((div)=> div.remove);

let amount = size * size
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = ('white');
    board.insertAdjacentElement('beforeend', square);
    square.addEventListener('mouseover', colorSquare);
};
};

populateBoard (16);

function changeSize(input) {

    if (input >=2 && input <=100) {
        populateBoard(input);
    }

    else{
        screen.classList.add('red');
        screen.innerText = 'Please select value between 2 and 100.';
        const myTimeout = setTimeout(removeClassList, 5000);

function removeClassList() {
    screen.classList.remove('red');
}
    }
};

function colorSquare(){
    if(click) {
        if(color === "random") {
            this.style.backgroundColor = `hsl(${Math.random()*360},100%, 50%)`;
        }
        else {this.style.backgroundColor = color}
    }

 
};

function changeColor(choice) {
    color = choice;
}

document.querySelector('body').addEventListener('click', function() {
    click = !click;
});

reset.addEventListener('click', function(){
    location.reload();
})