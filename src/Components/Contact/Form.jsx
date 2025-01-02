import React, { useState } from "react";
import Style from "./Contact.module.scss";

export default function Form() {
  function showSpanElement(input) {
    if (input.value) {
      input.previousElementSibling.classList.replace("hide", "show");
      input.previousElementSibling.innerHTML = "";
      input.previousElementSibling.append(input.placeholder);
    } else {
      input.previousElementSibling.classList.replace("show", "hide");
    }
  }

  return (
    <>
      <form action="">
        <div className={`${Style["input-box"]}`}>
          <span className={`hide`}></span>
          <input
            onInput={function (e) {
              showSpanElement(e.target);
            }}
            autoComplete="current-userName"
            className="my-3"
            type="text"
            placeholder="userName"
          />
        </div>
        <div className={`${Style["input-box"]}`}>
          <span className={`hide`}>{}</span>
          <input
            onInput={function (e) {
              showSpanElement(e.target);
            }}
            className="my-4"
            autoComplete="current-age"
            type="text"
            placeholder="userAge"
          />
        </div>
        <div className={`${Style["input-box"]}`}>
          <span className={`hide`}>{}</span>
          <input
            onInput={function (e) {
              showSpanElement(e.target);
            }}
            className="my-4"
            autoComplete="current-email"
            type="email"
            placeholder="userEmail"
          />
        </div>
        <div className={`${Style["input-box"]}`}>
          <span className={`hide`}>{}</span>
          <input
            onInput={function (e) {
              showSpanElement(e.target);
            }}
            className="my-4"
            autoComplete="current-password"
            type="password"
            placeholder="userPassword"
          />
        </div>
        <button type="submit" className={`${Style["send-btn"]}`}>
          Send Message
        </button>
      </form>
    </>
  );
}
