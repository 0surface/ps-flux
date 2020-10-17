import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom"; /*Creates a const called render that references react-dom's render fuction */
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
