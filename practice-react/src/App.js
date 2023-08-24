import React, { useState } from "react";

function App() {
  const [count, setCounter] = useState(0);

  function numberIcreament() {
    if (count >= 10) {
      return;
    }
    return setCounter(count + 1);
  }

  const numberDecreament = () => {
    if (count <= 0) {
      return;
    }
    return setCounter(count - 1);
  };

  return (
    <div className="App">
      <button onClick={numberIcreament}>Increase</button>
      <span>{count}</span>
      <button onClick={numberDecreament}>Decrease</button>
    </div>
  );
}

export default App;
