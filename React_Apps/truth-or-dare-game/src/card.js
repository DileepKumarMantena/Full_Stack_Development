// Card.js
import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      {card ? <p>{card}</p> : <p>Select Truth or Dare</p>}
    </div>
  );
};

export default Card;
