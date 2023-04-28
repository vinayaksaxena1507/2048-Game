import React from "react";
import ReactDOM from "react-dom/client";
import BoardView from "./components/Board";
import "./main.scss";
import "./styles.scss";
import Modal from "./components/Modal.jsx";

const App = () => (
  <div>
    <Modal />
    <BoardView />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render 
(
  <>
    <h1>2048</h1>
    <App />
  </>
);
