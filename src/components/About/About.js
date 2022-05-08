import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Throbber from '../Throbber';

const About = function About() {
  // const dependency = true;

  const [fetching, setFetching] = useState(false);
  const [version, setVersion] = useState('');

  const getJSON = async (url) => {
    setFetching(true);

    const response = await fetch(url);
    const data = await response.json();

    setFetching(false);

    return data;
  };

  useEffect(() => {
    const getVersion = async () => {
      const data = await getJSON('http://192.168.0.231:5000/system');

      if (version !== data.version) {
        setVersion(data.version);
      }
    };

    getVersion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="about" aria-label="main">
      <h4>
        <span>version</span>
        {!fetching ? <span className="version">{version}</span> : <Throbber />}
      </h4>
      <Link to="/">Go Back</Link>
    </section>
  );
};

export { About as default };
