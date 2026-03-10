import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  updateEmployee,
} from "../feature/employee/employeeSlicer";

const Add_Emp = () => {
  const [employee, setEmployee] = useState({});
  const { editData } = useSelector((state) => state.employee);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData.id) {
      dispatch(updateEmployee(employee));
    } else {
      dispatch(createEmployee(employee));
    }

    setEmployee({});
  };

  useEffect(() => {
    setEmployee(editData);
  }, []);
  return (
    <div className="container">
      <form className="row g-3" method="post" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
            value={employee.name || ""}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputPassword4"
            name="email"
            onChange={handleChange}
            value={employee.email || ""}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            name="department"
            id="inputAddress"
            onChange={handleChange}
            value={employee.department || ""}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Manager
          </label>
          <select
            id="inputState"
            className="form-select"
            name="manager"
            onChange={handleChange}
            value={employee.manager || ""}
          >
            <option>Choose...</option>
            <option>Anashali</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_Emp;
