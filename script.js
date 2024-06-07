const container = document.querySelector(".container");
const noSquares = document.querySelector(".nosquares");
noSquares.addEventListener("click", () => {
    changeSquaresPerSide(prompt("Enter number of squares per side"), container.children[0].className);
});

function createSquare() {
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.addEventListener("mouseenter", () => changeSquareColor(square));
    return square;
}

function changeSquareColor(square) {
    square.style.backgroundColor = getRandomColor();
}

//Generates random values between 0 and 255 as individual RGB values and returns it
function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function createNewSquares(width, height) {
    const newSquare = document.createElement("div");
    newSquare.classList.toggle("newSquare");
    newSquare.style.width = width;
    newSquare.style.height = height;
    newSquare.style.boxSizing = "border-box"
    newSquare.addEventListener("mouseenter", () => changeSquareColor(newSquare));
    return newSquare;
}

function changeSquaresPerSide(squarePerSide, elem) {
    //Gets the new dimensions of the squares when sides are changed
    squareDimensions = (256 / squarePerSide) + "px";
    elem = "."+elem;
    const square = document.querySelectorAll(elem);
    for (let i = 0; i < square.length; i++) {
        square[i].remove();
    }
    appendToContainer(squareDimensions, squarePerSide);
    return squareDimensions;
}

//Add squares to container node by using a for loop
function appendToContainer(dimension, squarePerSide) {
    for (let index = 0; index < (squarePerSide*squarePerSide); index++) {
        container.appendChild(createNewSquares(dimension, dimension));
    }
}

//Creates first grid 
for (let index = 0; index < 256; index++) {
    container.appendChild(createSquare());
}