import React, { useState, usEffect } from "react";
// Objective here is create a counter that decreases and increases by 1 and decrements by 1
// Using useState helps us update the states of hooks
function App() {
  const [result, setResult] = useState(0);

  function populationCalculator(population, n) {
    // return population + n * (months * decadesLeft);
    for (let month = 1; month <= 360; month++) {
      population += n;
    }
    return population;
  }

  const handleButtonClick = () => {
    const computedResult = populationCalculator(256, 2);
    setResult(computedResult);
  };

  console.log(populationCalculator(256, 2));

  return (
    <div className="App">
      <p>hi</p>
      <button onClick={handleButtonClick}>Calculate Population</button>
      <span>{result}</span>
    </div>
  );
}

export default App;
