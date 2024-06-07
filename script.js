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
    square.style.backgroundColor = "blue";
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
    squareDimensions = (256 / squarePerSide) + "px";
    elem = "."+elem;
    const square = document.querySelectorAll(elem);
    for (let i = 0; i < square.length; i++) {
        square[i].remove();
    }
    appendToContainer(squareDimensions, squarePerSide);
    return squareDimensions;
}

function appendToContainer(dimension, squarePerSide) {
    for (let index = 0; index < (squarePerSide*squarePerSide); index++) {
        container.appendChild(createNewSquares(dimension, dimension));
    }
}

for (let index = 0; index < 256; index++) {
    container.appendChild(createSquare());
}