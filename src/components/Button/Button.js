import propTypes from 'prop-types';
import React from 'react';

const Button = function Button({ text }) {
  return (
    <button className="button" type="button">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Button Text',
};

Button.propTypes = {
  text: propTypes.string,
};

export { Button };
