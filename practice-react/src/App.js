import React, { useState, usEffect } from "react";

function App() {
  const [increase, setIncrease] = useState(0);

  function Increaser() {
    if (increase >= 10) {
      return;
    } else {
      setIncrease(increase + 1);
    }
  }
  function Decreaser() {
    if (increase <= 0) {
      return;
    } else {
      setIncrease(increase - 1);
    }
  }

  return (
    <div className="App">
      <p>hi</p>
      <button onClick={Increaser} className="">
        Increase
      </button>
      <span>{increase}</span>
      <button onClick={Decreaser}>Decreaser</button>
    </div>
  );
}

export default App;
