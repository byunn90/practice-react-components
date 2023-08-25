// Importing useState from the react package
import React, { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div className="App">
      <button onClick={getAdvice}>Click me</button>
      <span>{advice}</span>
    </div>
  );
}
export default App;
