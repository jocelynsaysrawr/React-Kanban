import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import BoardsIndex from "./components/boards_index";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={BoardsIndex} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
