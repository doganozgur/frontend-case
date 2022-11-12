import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { GlobalStyles } from "../src/components/styles/Global";
import { ThemeProvider } from "styled-components";
import { store } from "./redux/store";
import { Provider } from "react-redux";

// Themes
const theme = {
  colors: {
    primary: "#1EA4CE",
    secondary: "#147594",
    clrBlack: "#000",
    clrWhite: "#FFF",
    clrNeutral100: "#FAFAFA",
    clrNeutral200: "#DFDEE2",
    clrNeutral300: "#F4F4F4",
    clrNeutral400: "#E0E0E0",
    clrNeutral500: "#A8A8A8",
    clrNeutral600: "#6F6F6F",
    clrNeutral700: "#525252",
    clrNeutral800: "#191919",
    clrNeutral900: "#697488",
    clrPurple100: "#F2F0FD",
    clrPurple200: "#F3F0FE",
  },
  screens: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
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
    <Provider store={store}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
);