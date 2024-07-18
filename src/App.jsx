import React, { useState } from 'react';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangeA = (e) => {
    setA(Number(e.target.value));
  };

  const handleChangeB = (e) => {
    setB(Number(e.target.value));
  };

  const handleOperation = (operator) => {
    switch (operator) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        setResult(a / b);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="calculator-container">

        <h3>Simple Calculator</h3>

        {/* first value */}
        <div className="input-container">
          <label htmlFor="a">A:</label>
          <input type="text" id="a" value={a} onChange={handleChangeA} placeholder="Enter first value" />
        </div>

        <br></br>

        {/* second value */}
        <div className="input-container">
          <label htmlFor="b">B:</label>
          <input type="text" id="b" value={b} onChange={handleChangeB} placeholder="Enter second value" />
        </div>

        <br></br>

        {/* output container */}
        <div className="output">
          <label htmlFor="b">Output:</label>
          <input type="text" id="output" value={result} readOnly placeholder="Output" />
        </div>

        <br></br>

        {/* buttons */}
        <div className="buttons-container">
          <button className="btn plus" onClick={() => handleOperation('+')}>+</button>
          <button className="btn minus" onClick={() => handleOperation('-')}>-</button>
          <button className="btn times" onClick={() => handleOperation('*')}>*</button>
          <button className="btn divide" onClick={() => handleOperation('/')}>/</button>
        </div>

      </div>
    </>
  );
}

export default App;
