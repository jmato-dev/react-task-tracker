import PropTypes from 'prop-types';
import React from 'react';

const Button = function Button({ text, children, className, onClick }) {
  let classes = 'button';

  if (className) classes = `${classes} ${classes}-${className}`;

  return (
    <button className={classes} type="button" onClick={onClick}>
      {children}
      {text && <span>{text}</span>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.shape({
    type: PropTypes.func,
  }),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export { Button as default };
