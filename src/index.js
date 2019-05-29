import React from "react";
import ReactDOM from "react-dom";
import Number from "./Number";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>
        <Number />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
