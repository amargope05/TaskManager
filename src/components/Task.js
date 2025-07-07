import React from "react";

const Task = ({ task, index, deleteTask, updateTask }) => {
  return (
    <div className={`task ${task.isCompleted ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => updateTask(index, !task.isCompleted)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

export default React.memo(Task);
