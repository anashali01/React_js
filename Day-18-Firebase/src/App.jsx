import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodos,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "./features/todos/todoSlice";

const App = () => {
  const [text, setText] = useState({});
  const { todo } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.id) {
      dispatch(updateTodo(text));
    } else {
      dispatch(createTodos(text));
    }

    setText({});
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleUpdate = (id) => {
    let updTodo = todo.find((val) => val.id === id);
    setText(updTodo);
  };

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2>Add Todo</h2>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={text.title || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary"> Add Data</button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <table className="table table-dark table-hover table-borderless">
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((val, idx) => {
                return (
                  <tr key={val.id}>
                    <td>{idx + 1}</td>
                    <td>{val.title}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(val.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => handleUpdate(val.id)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
