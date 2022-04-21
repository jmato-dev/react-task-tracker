import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskAdd = function TaskAdd({ onAdd }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Add a text');
      return;
    }

    if (!day) {
      alert('Add a day');
      return;
    }

    onAdd(text, day, reminder);

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-checkbox">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
};

TaskAdd.propTypes = {
  onAdd: PropTypes.func,
};

export { TaskAdd as default };
