

function createBoard(size){
let board = document.querySelector(".board");
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

board.innerHTML = '';

for(let i = 0 ; i < size*size; i ++){
    let square = document.createElement("div");
    square.classList.add("squares")
    board.appendChild(square);
    
    square.addEventListener("mouseover",() =>{
        square.style.backgroundColor = getRandomColor();   
     })
    }  
   
}


let resetGrid = document.getElementById("reset");
resetGrid.addEventListener("mouseover",()=>{
    resetGrid.style.backgroundColor = "#C8C8C8";
})
resetGrid.addEventListener("mouseleave",()=>{
    resetGrid.style.backgroundColor = "white";
}
)

resetGrid.addEventListener("click", () => {
    let squares = document.querySelectorAll(".squares");
    squares.forEach(square => {
        square.style.backgroundColor = `white`;
    });
});        


function changeSize(input) {
    createBoard(input);
}
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
