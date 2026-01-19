import React, { useEffect } from 'react'

const Login = ({handleLogin}) => {

    useEffect(()=>{
        return()=>{
            console.log(`Component Unmounting`);
        }
    },[])
  return (
    <>
          <button onClick={()=>{handleLogin(true)}}>Login</button>
    </>
  )
}

export default Login
