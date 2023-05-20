let color = "black";

document.addEventListener("DOMContentLoaded", function () {
  // createBoard(16);
  console.log("Hello World");
  let btn = document.querySelector("#selbtn");
  btn.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let board = document.querySelector(".board");
  let numGrids = size * size;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < numGrids; i++) {
    let grid = document.createElement("div");
    grid.style.backgroundColor = "yellow";
    grid.addEventListener("mouseover", colorGrid);
    board.insertAdjacentElement("beforeend", grid);
  }
}

function getSize() {
  let num = prompt("Choose the size of the board");
  let message = document.querySelector("#message");

  if (isNaN(num) || num < 1 || num > 100) {
    message.innerHTML = "Please input a number between 1 and 100";
  } else message.innerHTML = "Size Selected!";

  return num;
}

function setColor(colorChoice) {
  color = colorChoice;
}

function colorGrid() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}deg,${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}

function resetGrid() {
  let grids = document.querySelectorAll(".board div");
  grids.forEach((div) => (div.style.backgroundColor = "yellow"));
}
