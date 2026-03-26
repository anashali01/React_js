import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmp, getAllEmp } from "../feature/employee/employeeSlicer";
// import { useNavigate } from 'react-router';

const ViewEmployee = () => {
  const list = useSelector((state) => state.employee.employee);
  console.log(list);
  // const navigator = useNavigate();

  const dispatch = useDispatch();

  // const handleEdit = (id) => {
  //   let emp = list.find(emp => emp.id == id);
  //   dispatch(setEditData(emp));
  //   navigator('/add-emp');
  // }
  const handleDelete = (id) => {
    dispatch(deleteEmp(id));
  }

  useEffect(() => {
    dispatch(getAllEmp());
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center my-4">
        <div className="col-md-10">
          <table
            className="table table-striped table-bordered table-dark table-hover caption-top"
            style={{ width: "100%" }}
          >
            <caption>
              <h2 className="text-center border-bottom border-3 mb-3 pb-3">
                {" "}
                ~ Employee Data
              </h2>
            </caption>
            <thead>
              <tr className="text-center">
                <th>Sr.No</th>
                <th>Employee Name</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((emp, index) => {
                const { id, name, email, department, role} = emp;
                return (
                  <tr key={id} className="text-center align-middle">
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{department}</td>
                    <td>{role}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-outline-success" type="button">
                        View
                      </button>
                      <button
                        className="btn btn-warning"
                        type="button"
                      >
                        Change Details
                      </button>
                      <button className='btn btn-danger' type='button' onClick={()=> handleDelete(id)}>Delete</button>
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

export default ViewEmployee;
