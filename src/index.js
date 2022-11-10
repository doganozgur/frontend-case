import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { GlobalStyles } from "../src/components/styles/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#1EA4CE",
    secondary: "#147594",
    clrNeutral100: "#FFF",
    clrNeutral200: "#FAFAFA",
    clrNeutral300: "#DFDEE2",
    clrNeutral400: "#F4F4F4",
    clrNeutral500: "#E0E0E0",
    clrNeutral600: "#A8A8A8",
    clrNeutral700: "#6F6F6F",
    clrNeutral800: "#525252",
    clrNeutral900: "#000",
    searchbarBorder: "#E0E0E0",
  },
  fontFamily: {
    body: "'Open Sans', sans-serif",
  },
  fontSize: {
    textXs: "0.75rem", // 12px
    textSm: "0.8125rem", // 13px
    textMd: "0.875rem", // 14px
  },
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