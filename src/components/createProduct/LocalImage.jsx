import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const LocalImage = ({ files, setFiles }) => {
  const handleRemoveImage = (inx) => {
    console.log(inx);
    setFiles((p) => [...p].filter((_, index) => index !== inx));
  };
  return (
    <div className="local_image">
      {Object.values(files).map((image, inx) => (
        <div key={inx}>
          <img src={URL.createObjectURL(image)} width={100} alt="" />
          <IoMdCloseCircle onClick={() => handleRemoveImage(inx)} />
        </div>
      ))}
    </div>
  );
};

export default LocalImage;
