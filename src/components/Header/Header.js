import React from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MdAdd, MdRemove } from 'react-icons/md';

import Button from '../Button';

const Header = function Header({ title, showAddForm, setShowAddForm }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button className="add" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? <MdRemove /> : <MdAdd />}
        </Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
  showAddForm: PropTypes.bool,
  setShowAddForm: PropTypes.func,
};

export { Header as default };
