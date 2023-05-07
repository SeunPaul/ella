/* eslint-disable react/jsx-props-no-spreading */
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import upload from "../../../assets/icons/direct.svg";
import { ImageUploadProps } from "./types";
import notify from "../../../utils/notify";
import "./page.css";

function ImageUpload({ image, setImage }: ImageUploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 1) {
        notify("error", "Please upload only one file");
      } else {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const url = typeof reader.result === "string" ? reader.result : "";
          setImage({ url, file });
        };
      }
    },
    [setImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="images-upload">
      {image ? (
        <div
          className="img"
          style={{ backgroundImage: `url(${image.url})` }}
          onClick={() => onRemoveImage()}
        />
      ) : (
        <div className="add-img" {...getRootProps()}>
          <input {...getInputProps()} />
          <img src={upload} alt="" />
          {isDragActive ? (
            <p>Drop the image here ...</p>
          ) : (
            <p>Drag image here or click to upload</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
