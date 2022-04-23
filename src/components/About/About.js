import React from 'react';
import { Link } from 'react-router-dom';

const About = function About() {
  return (
    <section className="about">
      <h4>version 0.1.0</h4>
      <Link to="/">Go Back</Link>
    </section>
  );
};

export { About as default };
