import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

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
        <Input
          id="task-add--task"
          label="Task"
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Add Task"
          type="text"
          value={text}
        />
      </div>
      <div className="form-control">
        <Input
          id="task-add--day-time"
          label="Day & Time"
          onChange={(e) => {
            setDay(e.target.value);
          }}
          placeholder="Add Day & Time"
          type="text"
          value={day}
        />
      </div>
      <div className="form-control form-control-checkbox">
        <Input
          checked={reminder}
          id="task-add--reminder"
          label="Set Reminder"
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
          type="checkbox"
          value={reminder}
        />
      </div>
      <Input type="submit" value="Save Task" />
    </form>
  );
};

TaskAdd.propTypes = {
  onAdd: PropTypes.func,
};

export { TaskAdd as default };
