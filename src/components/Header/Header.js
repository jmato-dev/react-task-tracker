import React from 'react';
import propTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import Button from '../Button';

const Header = function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button className="add">
        <MdAdd />
      </Button>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: propTypes.string,
};

export { Header as default };
