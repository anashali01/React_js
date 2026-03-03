import React from "react";

const Form = ({ todo, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">Todo Task List</h2>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="my-2">
              <label htmlFor="text" className="form-label">
                Todo :
              </label>
              <input
                type="text"
                className="form-control"
                name="text"
                value={todo.text || ""}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
