import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearAll = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4">Calculator</h1>

        <div className="bg-gray-100 p-3 rounded mb-4 text-right">
          <div className="text-gray-600">{input}</div>
          <div className="text-xl font-semibold">{result}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("/")} className="btn bg-orange-400">÷</button>

          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("*")} className="btn bg-orange-400">×</button>

          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={() => handleClick("-")} className="btn bg-orange-400">−</button>

          <button onClick={() => handleClick("0")} className="btn">0</button>
          <button onClick={clearAll} className="btn bg-red-400">C</button>
          <button onClick={calculateResult} className="btn bg-green-400">=</button>
          <button onClick={() => handleClick("+")} className="btn bg-orange-400">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;