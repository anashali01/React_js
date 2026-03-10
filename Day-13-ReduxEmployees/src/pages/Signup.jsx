import React from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../feature/user/userSlice.js'

const SignUp = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(createUser({username : "yash" , email : "ybhakta@gmail.com" , role : "user"}))}>Add</button>
    </div>
  )
}

export default SignUp
