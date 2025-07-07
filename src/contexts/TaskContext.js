import React, { createContext, useState } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage"; 
export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (taskText) => {
    const newTask = { text: taskText, isCompleted: false };
    setTasks([...tasks, newTask]); 
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id)); 
  };


  const updateTask = (id, isCompleted) => {
    const updatedTasks = tasks.map((task, index) =>
      index === id ? { ...task, isCompleted } : task
    );
    setTasks(updatedTasks); 
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
