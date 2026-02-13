import React from 'react'
import Counter from '../hoc/Counter.jsx'

const Count = ({count , increment}) => {
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=> increment()}>Increment</button>
    </>
  )
}

export default Counter(Count);
