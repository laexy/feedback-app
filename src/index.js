import React from "react";
import ReactDOM from "react-dom";
// importing css
import "./index.css";

// importing code from app function in App.js
import App from "./App";

// format: render(content, location)
ReactDOM.render(
  // adds additional checks and warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
