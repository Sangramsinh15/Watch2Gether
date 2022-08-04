import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/muiTheme";
import CssBaseline from "@mui/material/CssBaseline";
import ContextWrapper from "./context/ContextWrapper";
/**
 * Rener the application using react DOM
 * inside cssBaseline with theme provider an context wrapper.
 */
ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
