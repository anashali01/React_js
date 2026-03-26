import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../feature/tasks/taskSlice";

const MyTask = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log("User", user);
  console.log("tasks", tasks);

  const myTasks = tasks.filter((task) => task.employeeId == user.id);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <div className="task-container">
      <h2 className="task-title">My Tasks</h2>

      <div className="task-grid">
        {myTasks.length > 0 ? (
          myTasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h5>{task.name}</h5>
              <span
                className={`badge ${task.priority === "complete" ? "complete" : "pending"}`}
              >
                {task.priority}
              </span>
            </div>
          ))
        ) : (
          <p className="no-task">No Task Assigned ❌</p>
        )}
      </div>
    </div>
  );
};

export default MyTask;
