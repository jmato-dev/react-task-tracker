import React, { useState } from 'react';
import { Header, Tasks } from './components';

const App = function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'Doctors Appointment',
      id: 1,
      date: 'Feb 5th at 5:30pm',
      reminder: true,
    },
    {
      text: 'Meeting at School',
      id: 2,
      date: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      text: 'Food Shopping',
      id: 3,
      date: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
};

export default App;
