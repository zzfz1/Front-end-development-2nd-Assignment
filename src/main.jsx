import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import "./scss/DisplaySeats.scss";
import "./utilities/auto-key-lists";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
