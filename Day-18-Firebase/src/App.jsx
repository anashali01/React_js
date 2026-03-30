import React from 'react'
import { useDispatch } from 'react-redux'
import { createTodos } from './features/todos/todoSlice';

const App = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createTodos({name : 'Node Revision '}))
  }
  return (
    <div>
      <button onClick={handleClick}>Add Data</button>
    </div>
  )
}

export default App
