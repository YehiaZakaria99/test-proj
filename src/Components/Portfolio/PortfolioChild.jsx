import React from "react";
import port1 from "../../assets/portfolio/port1.png";

import Style from "./Portfolio.module.scss";
import { useState } from "react";

export default function PortfolioChild({ getImgSrc, imgSrc, imgAlt }) {
  return (
    <>
      <div
        onClick={(e) => {
          getImgSrc(e);
        }}
        className={`${Style["box"]}`}
      >
        <div className={`${Style["overlay"]}`}>
          <i className="fa-solid fa-plus fa-5x"></i>
        </div>
        <img className="w-100" src={imgSrc} alt={imgAlt} />
      </div>
    </>
  );
}
