import React from 'react';
import PropTypes from 'prop-types';

import { FaTimes } from 'react-icons/fa';

const Task = function Task({ task, onDelete }) {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTimes onClick={onDelete} />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.element.isRequired,
  onDelete: PropTypes.func,
};

export { Task as default };
