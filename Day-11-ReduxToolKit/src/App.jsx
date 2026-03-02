import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice.js";


const App = () => {
  // the slice reducer is mounted under `counter` key in store
  const counter = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count : {counter}</h2>
      <button onClick={() => dispatch(increment ())}>Increment</button>
      <button onClick={() => dispatch(decrement ())}>Decrement</button>
    </div>
  );
};

export default App;
