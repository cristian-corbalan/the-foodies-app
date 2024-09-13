'use client';

import { useCallback, useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker ({ label, name }) {
  const inputRef = useRef(null);

  const handlePickClick = useCallback((event) => {
    inputRef.current.click();
  }, []);

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          className={classes.input}
          name={name}
          id={name}
          ref={inputRef}
        />
        <button type="button" className={classes.button} onClick={handlePickClick}>Pick an Image</button>
      </div>
    </div>
  );
}
