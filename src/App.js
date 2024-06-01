import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App bg">
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleCompletion} />
    </div>
  );
}

export default App;
