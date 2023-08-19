import React, { useState, usEffect } from "react";
// Objective here is create a counter that decreases and increases by 1 and decrements by 1
// Using useState helps us update the states of hooks
function App() {
  const [increase, setIncrease] = useState(0);

  function Increaser() {
    if (increase >= 10) {
      return;
    } else {
      setIncrease(increase + 2);
    }
  }
  function Decreaser() {
    if (increase <= 0) {
      return;
    } else {
      setIncrease(increase - 2);
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
