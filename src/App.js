import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/login";
import { CssBaseline } from "@mui/material";
import "./assets/form.css";
import NavBar from "./Layout/NavBar";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth" element={<NavBar />}>
            <Route path="home" element />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
