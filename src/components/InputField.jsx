import React from 'react';
import './InputField.css';

const InputField = ({ label, type = 'text', placeholder, required, className = '', ...props }) => {
  return (
    <div className={`input-field-group ${className}`}>
      {label && <label>{label}</label>}
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} required={required} {...props}></textarea>
      ) : (
        <input type={type} placeholder={placeholder} required={required} {...props} />
      )}
    </div>
  );
};

export default InputField;
