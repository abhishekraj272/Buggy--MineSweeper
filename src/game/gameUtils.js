// Var is used because we dont need block scope here.
import Game from "./Game";
export var game;

export function getGame(row, col, diff) {
  if (!game) {
    game = new Game(row, col, diff);
  }
  return game;
}
