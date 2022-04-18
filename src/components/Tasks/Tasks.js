import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

const Tasks = function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      reminder: PropTypes.bool.isRequired,
    }),
  ),
};

export { Tasks as default };
