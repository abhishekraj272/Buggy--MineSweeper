import React, { useContext } from "react";
import "./Menu.css";
import { AppContext } from "./../../context/context";
import { updateCol, updateDiff, updateRow } from "./../../context/action";

function Menu() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="menu glassEffect">
      <div>
        <label htmlFor="rowSelect">Rows</label>
        <input
          id="rowSelect"
          type="range"
          value={state.row}
          onChange={(e) => dispatch(updateRow(e.target.value))}
          min="6"
          step="2"
          max="20"
          disabled={state.gameStarted}
        />
      </div>

      <div>
        <label htmlFor="colSelect">Columns</label>
        <input
          id="colSelect"
          type="range"
          value={state.col}
          onChange={(e) => dispatch(updateCol(e.target.value))}
          min="6"
          step="2"
          max="20"
          disabled={state.gameStarted}
        />
      </div>

      <div>
        <label htmlFor="difficultySelect">Difficulty</label>
        <input
          id="difficultySelect"
          type="range"
          value={state.difficulty}
          onChange={(e) => dispatch(updateDiff(e.target.value))}
          min="1"
          max="10"
          disabled={state.gameStarted}
        />
      </div>
    </div>
  );
}

export default Menu;
