import React from 'react'
import Children from './components/children.jsx'
const App = () => {
  return (
    <>
    <h1>User Data</h1>
    <hr />
      <Children name={"Alex"} age={21}/>
    </>
  )
}

export default App
