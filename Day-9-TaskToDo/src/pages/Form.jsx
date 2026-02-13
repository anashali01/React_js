import React from 'react'

const Form = ({task , handleSubmit , handleChange}) => {
  return (
    <div>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1 className="heading">To Do List </h1>
          <form action="" method="post" onSubmit={handleSubmit}>
            <label htmlFor="">Task :</label>
            <input type="text" name='task' onChange={handleChange} value={task.task || ''} className="input" />

            <div className="btn">
              <button type="submit">Assign</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Form
