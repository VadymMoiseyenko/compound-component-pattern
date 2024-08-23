import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/screens/Main";

function App() {
  const theme = createTheme({
    typography: {
      // fontFamily: ["IBM Plex Sans", "Roboto"].join(","),
      h4: {
        fontSize: "32px",
        lineHeight: "38px",
        fontWeight: 400,
        color: "white",
      },
      subtitle1: {
        fontSize: "16px",
        lineHeight: "23px",
        fontWeight: 400,
        color: "rgba(255, 255, 255, 0.7)",
      },
      subtitle2: {
        fontSize: "16px",
        lineHeight: "23px",
        fontWeight: 400,
        color: "white",
      },
    },
  });

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
