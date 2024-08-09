import "./App.css";
import MainScreen from "./MainScreen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainScreen />
      </BrowserRouter>
    </>
  );
}

export default App;
