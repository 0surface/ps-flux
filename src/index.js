import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom"; /*Creates a const called render that references react-dom's render fuction */
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

render(<AboutPage />, document.getElementById("root"));
