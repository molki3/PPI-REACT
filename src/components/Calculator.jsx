// src/Calculator.js
import { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-3xl font-semibold">Calculator</h1>
      <div className="mt-4">
        <input
          type="text"
          className="border border-gray-300 p-2 w-1/2 mx-auto"
          value={input}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '=', '/'].map((item, index) => (
          <button
            key={index}
            className={`${
              item === '=' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 hover:bg-gray-400'
            } p-2`}
            onClick={() => {
              if (item === '=') {
                calculateResult();
              } else {
                handleInput(item);
              }
            }}
          >
            {item}
          </button>
        ))}
        <button
          className="bg-red-500 hover:bg-red-600 text-white p-2 col-span-2"
          onClick={clearInput}
        >
          Clear
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl">Result: {result}</h2>
      </div>
    </div>
  );
}

export default Calculator;
