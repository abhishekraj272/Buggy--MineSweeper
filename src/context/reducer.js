import Types from "./types";

export const initState = {
  row: "20",
  col: "20",
  difficulty: "5",
  gameStarted: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Types.UPDATE_ROW:
      return { ...state, row: action.payload };
    case Types.UPDATE_COL:
      return { ...state, col: action.payload };
    case Types.UPDATE_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case Types.TOGGLE_GAME_STATE:
      return { ...state, gameStarted: !state.gameStarted };
    default:
      return state;
  }
};
