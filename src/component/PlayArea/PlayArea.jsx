import React, { useContext } from "react";
import toast from "react-hot-toast";
import { toggleGameState } from "../../context/action";
import { AppContext } from "../../context/context";
import { getGame } from "../../game/gameUtils";
// import Game from "../../game/Game";
import "./PlayArea.css";

function PlayArea() {
  const { state, dispatch } = useContext(AppContext);
  const row = parseInt(state.row);
  const col = parseInt(state.col);

  const game = getGame();

  const handleCellClick = (e) => {
    if (!state.gameStarted) {
      toast("Please Start the Game", { icon: "🙃" });
      return;
    }
    if (e.target.getAttribute("data-bomb") === "1") {
      toast("You Stepped on a BOMB!!!", { icon: "😵‍💫" });
      const items = document.querySelectorAll("td");
      for (const item of items) {
        item.innerHTML =
          item.getAttribute("data-bomb") === "0"
            ? item.getAttribute("data-surr")
            : "💣";
        item.classList.add("cell-revealed");
      }
      dispatch(toggleGameState());
      return;
    }
    e.target.classList.add("cell-revealed");
  };

  const handleStopGame = () => {
    dispatch(toggleGameState());
    if (state.gameStarted) {
      game.reset();
    }
    const items = document.querySelectorAll("td");
    for (const item of items) {
      item.classList.remove("cell-revealed");
    }
  };

  return (
    <div className="playArea glassEffect">
      <button
        className={`playArea__startBtn ${state.gameStarted && "gameStarted"}`}
        onClick={handleStopGame}
      >
        {state.gameStarted ? "Stop" : "Start"} Game
      </button>
      <div id="playBoard" className="playArea__board">
        <table className="playArea__table">
          <tbody>
            {[...Array(row)].map((_, i) => (
              <tr key={i}>
                {[...Array(col)].map((_, j) => (
                  <td
                    key={i + `${j}`}
                    data-bomb={game.board[i][j]}
                    data-surr={game.getSurrMines(i, j)}
                    onClick={handleCellClick}
                  >
                    {game.board[i][j] === 1 ? "💣" : game.getSurrMines(i, j)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayArea;
