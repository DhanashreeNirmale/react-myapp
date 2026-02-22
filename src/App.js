import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (num2 === "0") {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Simple Calculator
        </h1>

        <input
          type="number"
          placeholder="Enter First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="number"
          placeholder="Enter Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button onClick={add} className="bg-green-400 p-2 rounded">
            Add
          </button>
          <button onClick={subtract} className="bg-yellow-400 p-2 rounded">
            Subtract
          </button>
          <button onClick={multiply} className="bg-blue-400 p-2 rounded">
            Multiply
          </button>
          <button onClick={divide} className="bg-red-400 p-2 rounded">
            Divide
          </button>
        </div>

        <button
          onClick={clearAll}
          className="w-full bg-gray-400 p-2 rounded mb-4"
        >
          Clear
        </button>

        <div className="text-center text-xl font-semibold">
          Result: {result}
        </div>
      </div>
    </div>
  );
}

export default App;