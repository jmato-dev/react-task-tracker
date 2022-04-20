import React from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';
import Button from '../Button';

const Task = function Task({ task, onDelete, onReminder }) {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={onReminder}
    >
      <Button className="close" onClick={onDelete}>
        <MdClose />
      </Button>
      <h3>{task.text}</h3>
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
