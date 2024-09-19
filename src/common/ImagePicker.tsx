"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import { Trash2 } from "react-feather";
import { Button } from ".";

interface ImagePickerProps {
  id: string;
  label?: string;
  placeholder?: string;
}

export default function ImagePicker({
  id,
  label,
  placeholder,
}: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>();
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  function handlePicker() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    console.log("file", file);

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  const deleteImage = () => {
    setPickedImage(null);
  };

  return (
    <div className={classes.picker}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && (
            <div>
              <p>{placeholder}</p>
              <span onClick={handlePicker}>Add Image</span>
            </div>
          )}
          {pickedImage && (
            <>
              <img src={pickedImage} alt="The Image selected by the user" />
              <div className={classes.delete} onClick={deleteImage}>
                <Trash2 />
              </div>
            </>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={id}
          accept="image/png, image/jpeg"
          name={id}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        {/* <button className={classes.button} type="button" onClick={handlePicker}>
          Pick an Image
        </button> */}
      </div>
    </div>
  );
}
