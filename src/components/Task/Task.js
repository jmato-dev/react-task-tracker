import React from 'react';
import propTypes from 'prop-types';

const Task = function Task({ task }) {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <p>{task.date}</p>
    </div>
  );
};

Task.propTypes = {
  task: propTypes.element.isRequired,
};

export { Task as default };
