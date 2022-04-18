import React from 'react';
import PropTypes from 'prop-types';

import { FaTimes } from 'react-icons/fa';

const Task = function Task({ task, onDelete, onReminder }) {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={onReminder}
    >
      <h3>
        {task.text} <FaTimes onClick={onDelete} />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    reminder: PropTypes.bool.isRequired,
  }),
  onDelete: PropTypes.func,
  onReminder: PropTypes.func,
};

export { Task as default };
