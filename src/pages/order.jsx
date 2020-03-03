import React from 'react';
import { withRouter } from 'react-router-dom';

const Order = props => {
  const { id } = props.match.params;
  return (
    <div className="container">
      <h1>Order {id}</h1>
    </div>
  );
};

export default withRouter(Order);
