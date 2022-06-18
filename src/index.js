import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Words from "./Components/Words";
import Banner from "./Components/Banner";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Banner />
    <Words />
    <App />
  </React.StrictMode>
);
