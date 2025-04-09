import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskStatus = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  if (taskStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (taskStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="task_List">
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.completed ? "Completed" : "Pending"}
        </li>
      ))}
    </ul>
    </div>

  );
};

export default TaskList;
