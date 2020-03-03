import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>Here you can track your orders</p>
      <p>Feel free to contact us if you need it</p>
      <Link to="/active">
        <Button variant="contained" color="primary">
          Active orders
        </Button>
      </Link>
      <Link to="/create-new-order">
        <Button variant="contained" color="secondary">
          Create new order
        </Button>
      </Link>
    </div>
  );
};

export default Home;
