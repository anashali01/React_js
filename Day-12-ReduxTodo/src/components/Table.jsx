import React, { useState } from "react";
// Redux hooks for reading state and dispatching actions
import { useDispatch, useSelector } from "react-redux";
// action creators from the todo slice
import { removeTodo, updateTodo } from "../feature/todo/TodoSlice";

const Table = () => {
  // select the todos array from redux state (state shape: { todos: { todos: [...] } })
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // local state to keep track of the item being edited
  const [editData, setEditData] = useState({});

  // update local edit state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // dispatch update action, then clear edit data to exit edit mode
  const handleUpdate = () => {
    dispatch(updateTodo(editData));
    setEditData({});
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/* table displaying the list of todos */}
          <table className="table table-secondary table-bordered table-stripped table-hover mt-4">
            <thead>
              <tr>
                <th>No.</th>
                <th>Todo</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {todos.map((todo, index) => {
                const { id, text } = todo;
                return (
                  <tr key={id}>
                    {/* row number */}
                    <td>{index + 1}</td>
                    <td>
                      {/* show input when editing this row, otherwise plain text */}
                      {editData.id === id ? (
                        <input
                          type="text"
                          onChange={handleChange}
                          name="text"
                          className="form-control"
                          value={editData.text || ""}
                        />
                      ) : (
                        text
                      )}
                    </td>
                    <td>
                      {/* remove button: passes only id to reducer */}
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeTodo({ id }))}
                      >
                        Remove
                      </button>
                      {/* toggle between edit and update buttons */}
                      {editData.id === id ? (
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={handleUpdate}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning"
                          onClick={() => setEditData(todo)}
                        >
                          Edit
                        </button>
                      )}
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

export default Table;
