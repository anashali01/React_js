import React, { useState } from "react";

const Counter = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={() => setCount(count + (props.increase || 1))}
      />
    );
  };
};

export default Counter;
