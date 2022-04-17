import React from 'react';
import propTypes from 'prop-types';

import { Button } from '../Button';

const Header = function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: propTypes.string,
};

export { Header };
