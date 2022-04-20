import propTypes from 'prop-types';
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
  text: propTypes.string,
  children: propTypes.shape({
    type: propTypes.func,
  }),
  className: propTypes.string,
  onClick: propTypes.func,
};

export { Button as default };
