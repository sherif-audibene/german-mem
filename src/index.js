import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Words from "./Components/Words";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Words />
    <App />
  </React.StrictMode>
);
