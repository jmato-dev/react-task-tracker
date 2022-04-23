import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, About, Tasks, TaskAdd } from './components';

import './App.css';

const App = function App() {
  const tasksURL = 'http://192.168.0.231:5000/tasks';

  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const getJSON = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks = await getJSON(tasksURL);

      setTasks(fetchedTasks);
    };

    getTasks();
  }, []);

  const addTask = async (text, date, reminder) => {
    const response = await fetch(tasksURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ text, date, reminder }),
    });

    const task = await response.json();

    setTasks([...tasks, task]);
  };
  const deleteTask = async (id) => {
    await fetch(`${tasksURL}/${id}`, { method: 'DELETE' });

    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
  };
  const reminderToggle = async (id) => {
    const toggledTask = await getJSON(`${tasksURL}/${id}`);

    toggledTask.reminder = !toggledTask.reminder;

    const response = await fetch(`${tasksURL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(toggledTask),
    });

    const data = await response.json();

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: data.reminder } : task;
      }),
    );
  };

  return (
    <Router>
      <div className="App">
        <Header showAddForm={showAddForm} setShowAddForm={setShowAddForm} />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
