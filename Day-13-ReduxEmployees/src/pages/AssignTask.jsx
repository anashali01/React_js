import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, createTask, getAll } from "../feature/tasks/taskSlice";
import { getAllEmp } from "../feature/employee/employeeSlicer";

const AssignTask = () => {
  const [taskData, setTaskData] = useState({});
  const dispatch = useDispatch();
  const { loading, tasks } = useSelector((state) => state.tasks);
  const { employee } = useSelector((state) => state.employee);
  const { user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(taskData));
    console.log(taskData);
    setTaskData({});
  };

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllEmp());
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <form action="" method="post" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className="form-label">
                Task Name :
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="form-control"
                value={taskData.name || ""}
              />
            </div>
            <div className="my-3">
              <select
                name="employeeId"
                id=""
                value={taskData.employeeId || ""}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" selected disabled>
                  -- Select Employee --
                </option>
                {employee.map((emp) => {
                  return (
                    <option key={emp.id} value={emp.id}>
                      {emp.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="my-3">
              <select
                name="priority"
                id=""
                value={taskData.priority || ""}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" disabled>
                  -- Select Priority --
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <button className="btn btn-primary">Add Task</button>
          </form>
        </div>
        <div className="col-md-8">
          <table className="table table-bordered table-hover table-danger text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Assign To</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    Loadingg
                  </td>
                </tr>
              ) : tasks.length > 0 ? (
                tasks.map((value, idx) => {
                  return (
                    <tr key={value.id}>
                      <td>{idx + 1}</td>
                      <td>{value.name}</td>
                      <td>
                        {employee.find((emp) => emp.id === value.employeeId)
                          ?.name || "Not Found"}
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            value.priority === "High" ? "bg-dark" : "bg-info"
                          }`}
                        >
                          {value.priority}
                        </span>
                      </td>
                      <td>{value.status}</td>
                      <td>
                        <button
                        className="btn text-white"
                        style={{backgroundColor : value.status === 'Complete' ? 'green' : 'red'}}
                          disabled={value.priority === "complete"}
                          onClick={() => dispatch(completeTask(value.id))}
                        >
                          {value.status === "Complete"
                            ? "Completed"
                            : "Mark Complete"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="text-center fw-bold">
                    Data Not Found !
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
