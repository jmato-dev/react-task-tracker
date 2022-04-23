import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = function Footer() {
  const location = useLocation();

  return (
    <footer>
      Copyright &copy; 2022
      {location.pathname !== '/about' && <Link to="/about">About</Link>}
    </footer>
  );
};

export { Footer as default };
