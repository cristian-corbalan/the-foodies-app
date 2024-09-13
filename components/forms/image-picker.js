'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker ({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const inputRef = useRef(null);

  function handlePickClick () {
    inputRef.current.click();
  }

  function handleImageChange (event) {
    const file = event.target.files[0];

    if (!file) {
      return null;
    }

    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      setPickedImage(event.target.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The i selected by the user" fill />}
        </div>

        <input
          type="file"
          accept="image/png, image/jpeg"
          className={classes.input}
          name={name}
          id={name}
          ref={inputRef}
          onChange={handleImageChange}
        />

        <button type="button" className={classes.button} onClick={handlePickClick}>Pick an Image</button>
      </div>
    </div>
  );
}
