document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  console.log("Hello World");
});

function createBoard(size) {
  let board = document.querySelector(".board");
  let numGrids = size * size;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < numGrids; i++) {
    let grid = document.createElement("div");
    grid.style.backgroundColor = "yellow";
    board.insertAdjacentElement("beforeend", grid);
  }
}
