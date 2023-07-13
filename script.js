const resetBtn = document.querySelector("#reset");
let inputValue = document.getElementById("value");
let slideRanger = document.getElementById("sliderRange");
let color = "black";
let click = true;

changeSize(16)
function changeSize(input){
  populateBord(input)
}
function clickChecker(){
    click = !click;
}

function changeColor(choice){
  color = choice;
}

function populateBord(size){
  const board = document.querySelector(".skatch");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
for(i = 0; i <= amount; i++){
  let square = document.createElement("div");
  square.style.background = "antiquewhite";
  board.insertAdjacentElement("beforeend",square);
  square.addEventListener("mouseover",colorSquare)

function colorSquare(){
 if (click){
    if(color === "random"){

    square.style.background = `hsl(${Math.random()*360},100%, 50%)`;
  }else{
    square.style.background = color;
  }
 }
}
}}
slideRanger.oninput = function(){
  inputValue.innerHTML = this.value;
}

if (screen.width >= '800px'){
  arlet("error")
}