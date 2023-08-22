import React, { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);

  function handleButtonClick() {
    const newNumbers = [];
    for (let i = 1; i <= 6; i++) {
      newNumbers.push[i];
    }
    setNumbers(newNumbers);
  }

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Display Numbers</button>
      <div>
        {numbers.map((number) => (
          <span key={number}>{number} </span>
        ))}
      </div>
    </div>
  );
}

export default App;
