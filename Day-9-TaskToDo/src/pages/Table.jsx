import React from "react";

const Table = ({ list, handleDelete, handleEdit }) => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-4">
          <h2 className="todo-title">Task List</h2>
          <div className="todo-list">
            <ul className="list">
              {list.map((value, index) => (
                <li className="todo-item" key={index}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span className="task-text">{value.task}</span>
                    <div className="event-wrapper">
                      <button className="edit-btn" type="button" onClick={() => handleEdit(value.id)}>Edit</button>
                      <button className="delete-btn" type="button" onClick={() => handleDelete(value.id)}>Delete</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
