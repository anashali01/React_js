import React, { useRef, useState } from "react";

const UnControl = () => {
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let salaryRef = useRef();
  let departmentRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      salary: salaryRef.current.value,
      department: departmentRef.current.value,
    };
    let newList = [];

    if (editId != null) {
      newList = list.map((emp) => {
        if (emp.id == editId) return { id: editId, ...obj };
        return emp;
      });
      setEditId(null);
    } else {
      newList = [...list, { ...obj, id: Date.now() }];
    }

    setList(newList);
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    salaryRef.current.value = "";
    departmentRef.current.value = "";
  };
  console.log(list);

  // Handle Delete Action
  const handleDelete = (id) => {
    let newList = list.filter((emp) => emp.id != id);
    setList(newList);
  };

  // Handle Edit Action
  const handleEdit = (id) => {
    let data = list.find((emp) => emp.id == id);
    nameRef.current.value = data.name;
    emailRef.current.value = data.email;
    passwordRef.current.value = data.password;
    salaryRef.current.value = data.salary;
    departmentRef.current.value = data.department;

    setEditId(id);
  };
  return (
    <>
      <div className="form-wrapper">
        <form className="form-card" onSubmit={handleForm}>
          <h2>Employee Form</h2>

          <div className="form-group">
            <label>Name</label>
            <input ref={nameRef} type="text" placeholder="Enter name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input ref={emailRef} type="email" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input ref={salaryRef} type="number" placeholder="Enter salary" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              ref={departmentRef}
              type="text"
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
                      onClick={() => handleEdit(id)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="delete-btn"
                      type="button"
                      onClick={() => handleDelete(id)}
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

export default UnControl;
