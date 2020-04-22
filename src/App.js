import React from "react";
import Nepal from "./Nepal";
import World from "./World";
import "./style.css";
function App() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="row">
            <Nepal />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="row">
            <World />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
