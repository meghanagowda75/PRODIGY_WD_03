let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const statusText = document.getElementById("status");
const cells = document.getElementsByClassName("cell");

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function makeMove(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;

    if (checkWinner()) {
      statusText.innerText = "Player " + currentPlayer + " wins!";
      gameOver = true;
    } else if (board.includes("") === false) {
      statusText.innerText = "It's a Draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.innerText = "Player " + currentPlayer + "'s turn";
    }
  }
}

function checkWinner() {
  for (let combo of winningCombinations) {
    let [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X";
  statusText.innerText = "Player X's turn";

  for (let cell of cells) {
    cell.innerText = "";
  }
}
