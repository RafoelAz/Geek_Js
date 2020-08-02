const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

function board() {
  const board = document.querySelector(".board");
  for (let i = 0; i < 10; i++) {
    const columBoard = document.createElement("div");
    columBoard.classList.add("colum");
    board.appendChild(columBoard);
    for (let j = 0; j < 10; j++) {
      const columBoardElement = document.createElement("div");
      columBoardElement.classList.add("columBoardElement");
      columBoard.appendChild(columBoardElement);
    }
  }

  const ALL_COLUMNS = document.querySelectorAll(".colum");

  ALL_COLUMNS.forEach((boardColumnElement, boardColumnIndex) => {
    let allCellsInColumn = boardColumnElement.querySelectorAll(".columBoardElement");
    allCellsInColumn.forEach((cellElement, cellIndex) => {
      if (boardColumnIndex % 2 == 0) {
        if (cellIndex % 2 !== 0) {
          cellElement.style.backgroundColor = "black";
        }
      } else {
        if (cellIndex % 2 == 0) {
          cellElement.style.backgroundColor = "black";
        }
      }
    });
  });

  let firstColumn = ALL_COLUMNS[0];
  let firstColumnCells = firstColumn.querySelectorAll(".columBoardElement");
  firstColumnCells.forEach((element, index) => {
    element.style.backgroundColor = "inherit";
    element.classList.add("center");

    if (index < firstColumnCells.length - 1 && index > 0) {
      element.innerText = 9 - index;
    }
  });

  let lastColumn = ALL_COLUMNS[ALL_COLUMNS.length - 1];
  let lastColumnCells = lastColumn.querySelectorAll(".columBoardElement");
  lastColumnCells.forEach((element, index) => {
    element.style.backgroundColor = "inherit";
    element.classList.add("center");

    if (index < lastColumnCells.length - 1 && index > 0) {
      element.innerText = 9 - index;
    }
  });

  ALL_COLUMNS.forEach((element, index) => {
    let allCellsInColumn = element.querySelectorAll(".columBoardElement");

    let lastCellInColumn = allCellsInColumn[allCellsInColumn.length - 1];
    lastCellInColumn.style.backgroundColor = "inherit";
    lastCellInColumn.classList.add("center");
    if (index > 0 && index < ALL_COLUMNS.length - 1) {
      lastCellInColumn.innerText = LETTERS[index - 1];
    }

    let firstCellInColumn = allCellsInColumn[0];
    firstCellInColumn.style.backgroundColor = "inherit";
    firstCellInColumn.classList.add("center");
    if (index > 0 && index < ALL_COLUMNS.length - 1) {
      firstCellInColumn.innerText = LETTERS[index - 1];
    }
  });
}
board();
