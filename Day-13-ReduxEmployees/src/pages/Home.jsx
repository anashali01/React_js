import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../feature/tasks/taskSlice";
import { getAllEmp } from "../feature/employee/employeeSlicer";

const Home = () => {
  const { employee } = useSelector((state) => state.employee);
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllEmp());
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body bg-gradient bg-primary border-0 rounded-5 text-center">
              <h2 className="fw-bolder text-white">Total Employees</h2>
              <p className="text-light fw-medium fs-5">{employee.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body bg-gradient bg-info border-0 rounded-5 text-center">
              <h2 className="fw-bolder text-dark">Total Tasks</h2>
              <p className="text-text-dark fw-medium fs-5">{tasks.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
