import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeEmployee, deactiveEmployee, setEditData } from '../feature/employee/employeeSlicer';
import { useNavigate } from 'react-router';

const ViewEmployee = () => {

  const list = useSelector(state => state.employee.employee);
  console.log(list);
  const navigator = useNavigate();
  
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    let emp = list.find(emp => emp.id == id);
    dispatch(setEditData(emp));
    navigator('/add-emp');
  }

  return (
    <div className="container">
      <div className="row justify-content-center my-4">
        <div className="col-md-10">
          <table className='table table-striped table-bordered table-dark table-hover caption-top' style={{ width: "100%" }}>
            <caption><h2 className='text-center border-bottom border-3 mb-3 pb-3'> ~ Employee Data</h2></caption>
            <thead>
              <tr className='text-center'>
                <th>Sr.No</th>
                <th>Employee Name</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Manager</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((emp, index) => {
                  const {id,name,email,department,manager,isActive} = emp;
                  return (
                    <tr key={id} className='text-center align-middle'>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{department}</td>
                      <td>{manager}</td>
                      <td className='d-flex gap-2 justify-content-center'>
                        {
                          isActive
                            ?<button className='btn btn-danger' type='button' onClick={() => dispatch(deactiveEmployee(id))}>DeActive</button>
                            :<button className='btn btn-success' type='button' onClick={() => dispatch(activeEmployee(id))}>Active</button>
                        }
                        <button className='btn btn-warning' type='button' onClick={() => handleEdit(id)}>Change Details</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewEmployee