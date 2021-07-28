import { useReducer } from "react";
import "./App.css";
import Menu from "./component/Menu/Menu";
import PlayArea from "./component/PlayArea/PlayArea";
import { AppContext } from "./context/context";
import { initState, reducer } from "./context/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Menu />
        <PlayArea />
      </AppContext.Provider>
    </div>
  );
}

export default App;
