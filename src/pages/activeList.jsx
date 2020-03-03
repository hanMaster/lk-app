import React from 'react';
import { Link } from 'react-router-dom';

const ActiveList = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to={'order/' + 1}>item1</Link>
        </li>
        <li>
          <Link to={'order/' + 2}>item2</Link>
        </li>
        <li>
          <Link to={'order/' + 3}>item3</Link>
        </li>
        <li>
          <Link to={'order/' + 4}>item4</Link>
        </li>
        <li>
          <Link to={'order/' + 5}>item5</Link>
        </li>
      </ul>
    </div>
  );
};

export default ActiveList;
