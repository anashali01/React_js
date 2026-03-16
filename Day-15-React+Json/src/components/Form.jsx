import React, { useState } from "react";

const Form = () => {

    const [todo , setTodo] = useState({});

    const handleChange = (e) => {
        const {name , value} = e.target;

        setTodo({...todo , [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(todo);
        setTodo({});
    }

    const createTodo = async (todo) => {
        await fetch('http://localhost:3000/todos',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(todo)
        })
    }

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <form className="form" method="post" onSubmit={handleSubmit}>
            <span className="title">Todo Application</span>
            <p className="description">
              Add Your Task
            </p>
            <div>
              <input
                placeholder="Enter your todo task"
                type="text"
                name="text"
                value={todo.text || ''}
                onChange={handleChange}
              />
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
