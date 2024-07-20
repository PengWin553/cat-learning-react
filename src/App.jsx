import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have an App.css file for styles

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('+');

  useEffect(() => {
    const numA = parseFloat(a) || 0;
    const numB = parseFloat(b) || 0;
    const operations = {
      '+': numA + numB,
      '-': numA - numB,
      '*': numA * numB,
      '/': numB !== 0 ? numA / numB : 'Error'
    };
    setResult(operations[operator]);
  }, [a, b, operator]);

  return (
    <div className="calculator-container">
      <h3>Simple Calculator</h3>
      
      <div className="input-container">
        <label htmlFor="a">A:</label>
        <input
          type="number"
          id="a"
          value={a}
          onChange={e => setA(e.target.value)}
          placeholder="Enter first value"
        />
      </div>

      <br />

      <div className="input-container">
        <label htmlFor="b">B:</label>
        <input
          type="number"
          id="b"
          value={b}
          onChange={e => setB(e.target.value)}
          placeholder="Enter second value"
        />
      </div>

      <br />

      <div className="output">
        <label htmlFor="output">Output:</label>
        <input
          type="text"
          id="output"
          value={result}
          readOnly
          placeholder="Output"
        />
      </div>

      <br />

      <div className="buttons-container">
        {['+', '-', '*', '/'].map(op => (
          <button
            key={op}
            className={`btn ${op === '+' ? 'plus' : op === '-' ? 'minus' : op === '*' ? 'times' : 'divide'} ${operator === op ? 'active' : ''}`}
            onClick={() => setOperator(op)}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;