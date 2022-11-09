import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { GlobalStyles } from "../src/components/styles/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#1EA4CE",
    secondary: "#147594",
    white: "#fff",
    black: "#000",
    bgBody: "#E5E5E5",
    checkMarkBorder: "#DFDEE2",
  },
  fontFamily: {
    body: "'Open Sans', sans-serif",
  },
  fontSize: {
    textXs: "0.75rem", // 12px
    textSm: "0.8125rem", // 13px
    textMd: "0.875rem", // 14px
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);