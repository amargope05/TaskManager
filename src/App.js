import React, { useState, useContext } from "react";
import { TaskContext } from "./contexts/TaskContext";
import Task from "./components/Task";
import './App.css';

const App = () => {
  const { tasks, addTask, deleteTask, updateTask } = useContext(TaskContext);
  const [newTaskText, setNewTaskText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      addTask(newTaskText);
      setNewTaskText("");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.isCompleted;
    if (filter === "Pending") return !task.isCompleted;
    return true; 
  });

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <h1>Task Manager</h1>

      <div className="filter-buttons">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Completed" ? "active" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
        <button
          className={filter === "Pending" ? "active" : ""}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
      </div>

      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default App;
