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
        screen.innerText = 'Please select value between 2 and 100.';
    }
};

function colorSquare(){
    if(click) {
        screen.innerText = 'Coloring Mode';
        screen.style.backgroundColor = 'green';
        if(color === "random") {
            this.style.backgroundColor = `hsl(${Math.random()*360},100%, 50%)`;
        }
        else {this.style.backgroundColor = color}
    }

        else {
            screen.innerText = 'Not coloring';
            screen.style.backgroundColor = 'orange';
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
