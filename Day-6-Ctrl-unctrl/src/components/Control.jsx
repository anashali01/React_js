import React, { useState } from "react";

const Control = () => {
  const [emp, setEmp] = useState({});
  const [list, setList] = useState([]);
  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmp({ ...emp, [name]: value });
  };

  // Handle Form
  const handleForm = (e) => {
    e.preventDefault();

    let newList = [...list];
    if (emp.id) {
      newList = newList.map((value)=>{
        if(value.id == emp.id) return emp;

        return value;
      })
    } else {
      newList = [...list, { emp, id: Date.now() }];
    }
    setList(newList);
    setEmp({});
  };

  // Handle Delete Action
  const handleDelete = (id) => {
    let newList = list.filter((emp) => emp.id != id);
    setList(newList);
  };

  const handleEdit = (id) => {
    let data = list.find((value) => value.id == id);
    setList(data);
  };
  return (
    <>
      <div className="form-wrapper">
        <form className="form-card" onSubmit={handleForm}>
          <h2>Employee Form</h2>

          <div className="form-group">
            <label>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              onChange={handleChange}
              type="number"
              name="salary"
              placeholder="Enter salary"
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              onChange={handleChange}
              type="text"
              name="department"
              placeholder="Enter department"
            />
          </div>

          <button type="submit">Add Data</button>
        </form>
      </div>
      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Salary</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.map((emp, idx) => {
              const { id, name, email, password, salary, department } = emp;
              return (
                <tr key={id}>
                  <td>{idx + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{salary}</td>
                  <td>{department}</td>
                  <td className="action-btns">
                    <button
                      className="edit-btn"
                      type="button"
                      onClick={handleEdit(id)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="delete-btn"
                      type="button"
                      onClick={handleDelete(id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Control;
