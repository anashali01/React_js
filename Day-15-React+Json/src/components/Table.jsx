import React, { useEffect, useState } from "react";

const Table = () => {
  const [list, setList] = useState([]);

  const getAllTodo = async () => {
    try {
      let res = await fetch("http://localhost:3000/todos");
      let data = await res.json();
      setList(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch("http://localhost:3000/todos/" + id, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllTodo();
    console.log(list);
    
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <table className="table table-bordered table-hover table-info caption-top">
            <caption>
              <h2 className="text-center">Todo List</h2>
            </caption>
            <thead>
              <tr>
                <th>No.</th>
                <th>Todo Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((val, idx) => {
                return (
                  <tr key={val.id}>
                    <td>{idx + 1}</td>
                    <td>{val.text}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(val.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
