import React, { useState } from 'react';
import { Header, Tasks, TaskAdd } from './components';

import './App.css';

const App = function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const addTask = (text, date, reminder) => {
    const task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      text,
      date,
      reminder,
    };

    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
  };
  const reminderToggle = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      }),
    );
  };

  return (
    <div className="App">
      <Header showAddForm={showAddForm} setShowAddForm={setShowAddForm} />
      {showAddForm && <TaskAdd onAdd={addTask} />}
      <section className="tasks">
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onReminder={reminderToggle}
          />
        ) : (
          'No Tasks to Show'
        )}
      </section>
    </div>
  );
};

export default App;
