import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <p>
        Try to use <Link to="/">homepage</Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;
