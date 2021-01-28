import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/main.min.css";
import reportWebVitals from "./js/reportWebVitals";

import { App } from "./js/App";
import Navbar from "./js/assets/navbar"

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

reportWebVitals();