import React, { useState, FormEvent } from "react"
import "./Textarea.css";
import PropTypes from 'prop-types';

export default function Textarea({ showPlaceholder, textPlaceholder, readOnly, error }) {
  const [value, setValue] = useState('');

  const handleChange = (event: FormEvent<HTMLTextAreaElement>) => {
    console.log('Handle Change: ', event.target.value);
    setValue(event.target.value);
    return event.target.value;
  };

  const handleFocus = () => {
    console.log('focused');
  };

  return (
    <div className="container">
      <p>{ error ? 'error-border' : ' '  }</p>
      <textarea
        id='textareaId'
        value={value}
        readOnly={readOnly}
        onChange={handleChange}
        className={ readOnly ? 'background-Readonly' : ' ' || error ? 'error-border' : ' '}
        placeholder={showPlaceholder ? textPlaceholder : ''}
        onFocus={handleFocus}
      />
    </div>
  )
}

Textarea.propTypes = {
  showPlaceholder: PropTypes.bool,
  error: PropTypes.bool
};

Textarea.defaultProps = {
  showPlaceholder: false,
  error: false
}