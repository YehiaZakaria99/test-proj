import React, { useState } from "react";
import Style from "./Contact.module.scss";

const FloatingPlaceholderInput = ({ placeholder, type }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (event) => {
    setIsFilled(true);
    setIsFilled(event.target.value);
  };
  return (
    <>
      <div className={`${Style["input-box"]} `}>
        <span className={`${isFilled ? "show-ph" : "hide"}`}>
          {`${placeholder}: `}
        </span>
        <input
          onInput={handleInputChange}
          autoComplete="current-userName"
          className=" py-3 my-3"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FloatingPlaceholderInput;
