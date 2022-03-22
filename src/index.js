import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <TodoContainer />{" "}
  </Router>,
  document.getElementById("root")
);
