import { biasNumGenerator } from "./utils";

class Game {
  constructor(row, col, difficulty) {
    this.row = parseInt(row);
    this.col = parseInt(col);
    this.difficulty = parseFloat(difficulty) / 10;
  }

  genGrid() {
    this.board = [];
    for (let i = 0; i < this.row; i++) {
      const temp = [];
      for (let j = 0; j < this.col; j++) {
        temp.push(biasNumGenerator(0, 1, 1, this.difficulty));
      }
      this.board.push(temp);
    }
  }
}

export default Game;
