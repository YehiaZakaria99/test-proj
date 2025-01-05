import React, { useState } from "react";
import Style from "./Contact.module.scss";
import FloatingPlaceholderInput from "./FloatingPlaceholderInput";

export default function Form() {
  return (
    <>
      <form action="">
        <FloatingPlaceholderInput placeholder="userName" type="text" />
        <FloatingPlaceholderInput placeholder="userAge" type="text" />
        <FloatingPlaceholderInput placeholder="userEmail" type="email" />
        <FloatingPlaceholderInput placeholder="userPassword" type="password" />
        <button type="submit" className={`${Style["send-btn"]}`}>
          Send Message
        </button>
      </form>
    </>
  );
}
