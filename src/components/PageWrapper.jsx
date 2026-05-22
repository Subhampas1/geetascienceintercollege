import React from 'react';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <div className={`page-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
