import { biasNumGenerator } from "./utils";

class Game {
  constructor(row, col, difficulty) {
    this.row = parseInt(row);
    this.col = parseInt(col);
    this.difficulty = parseInt(difficulty) / 10;
    this.genGrid();
  }

  genGrid() {
    this.board = [];
    for (let i = 0; i < this.row; i++) {
      const temp = [];
      for (let j = 0; j < this.col; j++) {
        temp.push(biasNumGenerator(0, 1, 0, this.difficulty));
      }
      this.board.push(temp);
    }
  }

  setDiff(diff) {
    this.difficulty = parseInt(diff) / 10;
    this.genGrid();
  }
  setRow(row) {
    this.row = parseInt(row);
    this.genGrid();
  }

  setCol(col) {
    this.col = parseInt(col);
    this.genGrid();
  }

  reset() {
    this.genGrid();
  }

  getSurrMines(i, j) {
    let sum = this.board[i][j];
    if (i === 0) sum += this.board[i + 1][j];
    if (i > 0) sum += this.board[i - 1][j];
    if (i < this.row - 2) sum += this.board[i + 1][j];
    if (j === 0) sum += this.board[i][j + 1];
    if (j > 0) sum += this.board[i][j - 1];
    if (j < this.col - 2) sum += this.board[i][j + 1];
    return sum;
  }
}

export default Game;
