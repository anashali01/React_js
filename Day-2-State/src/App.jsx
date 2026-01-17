import React from 'react'
import Button from './components/Button.jsx';

const App = () => {
  const [count , setCount] = React.useState(0);

  return (
    <>
    <h1>Count : {count}</h1>
    <Button onclick={()=> setCount(count + 1)}>Increment</Button>
    <Button onclick={()=> setCount(count - 1)}>Decrement</Button>
      
    </>
  )
}

export default App;