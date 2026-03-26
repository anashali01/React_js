import React, { useMemo, useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <br />
      <br />
      <Child sum={sum} />
      <input type="number" onChange={(e) => setNum1(num1 + 1)} />
      <input type="number" onChange={(e) => setNum2(num2 + 1)} />
    </div>
  );
};

export default App;
