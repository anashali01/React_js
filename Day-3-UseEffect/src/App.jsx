import React, { useEffect } from 'react'
import Login from './components/Login';

const App = () => {
  let [count , setCount] = React.useState(0);
  let [isLogin , setLogin] = React.useState(false);

  useEffect(()=>{
    console.log(`Components Mounting !`);
  },[])
  useEffect(()=>{
    console.log(`Components Updating !`);
  },[count])

  // console.log(`Render.......`);
  return (
    <>
      <h2>Count : {count}</h2>
      <button type='button' onClick={()=>{setCount(count + 1)}}>+</button>
      
      {isLogin == false ? <Login handleLogin={setLogin}/> : <h5>Welcome</h5>}
          {/* <button onClick={()=>{handleLogin(true)}}>Login</button> */}

    </>
  )
}

export default App
