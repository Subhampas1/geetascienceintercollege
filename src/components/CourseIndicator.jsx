import React from 'react';
import './CourseIndicator.css';

const CourseIndicator = ({ icon, label, color = 'primary' }) => {
  return (
    <div className={`course-indicator bg-${color}-light`}>
      <span className={`material-symbols-outlined text-${color}`}>{icon}</span>
      {label && <span className="indicator-label">{label}</span>}
    </div>
  );
};

export default CourseIndicator;
