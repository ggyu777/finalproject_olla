import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import TestComponent from './TestComponent'

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ContextProvider>
        <TestComponent/>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
