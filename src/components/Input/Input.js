/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const Input = function Input({
  type,
  placeholder,
  checked,
  disabled,
  value,
  onChange,
  id,
  label,
}) {
  return (
    <>
      {label && <label {...(id ? { htmlFor: id } : {})}>{label}</label>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`form-control form-control-${type} ${
          disabled ? 'form-control-disabled' : ''
        }`}
        {...(id ? { id } : {})}
        {...(checked ? { checked } : {})}
        {...(placeholder ? { placeholder } : {})}
        {...(disabled ? { disabled } : {})}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.bool,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export { Input as default };
