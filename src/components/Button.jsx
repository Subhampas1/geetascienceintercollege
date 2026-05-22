import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  return (
    <button className={`btn btn-${variant} ${size === 'large' ? 'btn-large' : ''} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
