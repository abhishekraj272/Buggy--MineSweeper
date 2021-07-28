import { getGame } from "../game/gameUtils";
import Types from "./types";

export const initState = {
  row: "20",
  col: "20",
  difficulty: "8",
  gameStarted: false,
};
export const reducer = (state, action) => {
  const game = getGame();
  switch (action.type) {
    case Types.UPDATE_ROW:
      game.setRow(action.payload);
      return { ...state, row: action.payload };
    case Types.UPDATE_COL:
      game.setCol(action.payload);
      return { ...state, col: action.payload };
    case Types.UPDATE_DIFFICULTY:
      game.setDiff(action.payload);
      return { ...state, difficulty: action.payload };
    case Types.TOGGLE_GAME_STATE:
      return { ...state, gameStarted: !state.gameStarted };
    default:
      return state;
  }
};
