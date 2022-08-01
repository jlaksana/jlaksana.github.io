import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Open+Sans"
    />
    <App />
  </React.StrictMode>
);
