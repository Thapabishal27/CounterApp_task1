import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    setCount(count - 1);
  };

  const ResetCount = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={addCount}>Increment</button>
      <button onClick={ResetCount}>Reset</button>
      <button onClick={subCount}>Decrement</button>
    </div>
  );
}

export default App;
