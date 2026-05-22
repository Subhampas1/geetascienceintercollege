import React from 'react';
import './Card.css';

const Card = ({ children, variant = 'default', className = '' }) => {
  return (
    <div className={`card card-${variant} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
