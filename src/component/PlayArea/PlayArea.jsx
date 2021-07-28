import React, { useContext, useEffect } from "react";
import { toggleGameState } from "../../context/action";
import { AppContext } from "../../context/context";
import Game from "../../game/Game";
import "./PlayArea.css";

function PlayArea() {
  const { state, dispatch } = useContext(AppContext);
  const row = parseInt(state.row);
  const col = parseInt(state.col);

  // useEffect(() => {
  //   const game = new Game(state.row, state.col, state.difficulty);
  //   game.genGrid();
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  const handleCellClick = (e) => {
    e.target.classList.add("cell-revealed");
  };

  return (
    <div className="playArea glassEffect">
      <button
        className={`playArea__startBtn ${state.gameStarted && "gameStarted"}`}
        onClick={() => dispatch(toggleGameState())}
      >
        {state.gameStarted ? "Stop" : "Start"} Game
      </button>
      <div id="playBoard" className="playArea__board">
        <table className="playArea__table">
          <tbody>
            {[...Array(row)].map((_, i) => (
              <tr key={i}>
                {[...Array(col)].map((_, j) => (
                  <td key={i + `${j}`} onClick={handleCellClick}>
                    A
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
