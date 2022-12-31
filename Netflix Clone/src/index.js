import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieProvider } from "./context/movies";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
