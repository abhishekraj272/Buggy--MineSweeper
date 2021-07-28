import { useReducer } from "react";
import "./App.css";
import Menu from "./component/Menu/Menu";
import PlayArea from "./component/PlayArea/PlayArea";
import { Toaster } from "react-hot-toast";
import { AppContext } from "./context/context";
import { initState, reducer } from "./context/reducer";
import { getGame } from "./game/gameUtils";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const game = getGame(state.row, state.col, state.difficulty);
  console.log(game);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Menu />
        <PlayArea />
        <Toaster />
      </AppContext.Provider>
    </div>
  );
}

export default App;
