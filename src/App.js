import React, { useState, useContext } from "react";
import { TaskContext } from "./contexts/TaskContext";
import Task from "./components/Task";
import './App.css'

const App = () => {
  const { tasks, addTask, deleteTask, updateTask } = useContext(TaskContext);
  const [newTaskText, setNewTaskText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      addTask(newTaskText);
      setNewTaskText(""); 
    }
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
       <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <h1>Task Manager</h1>
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
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
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
