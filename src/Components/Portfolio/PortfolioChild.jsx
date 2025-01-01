import React from "react";
import port1 from "../../assets/portfolio/port1.png";
import port2 from "../../assets/portfolio/port2.png";
import port3 from "../../assets/portfolio/port3.png";
import Style from "./Portfolio.module.scss"

export default function PortfolioChild() {
  return (
    <>
      <div className="col-md-4 col-12">
        <div className={`${Style["box"]}`}>
          <div className={`${Style["overlay"]}`}>
            <i className="fa-solid fa-plus fa-5x"></i>
          </div>
          <img className="w-100" src={port1} alt="port1" />
        </div>
      </div>

      <div className="col-md-4 col-12">
        <div className={`${Style["box"]}`}>
          <div className={`${Style["overlay"]}`}>
            <i className="fa-solid fa-plus fa-5x"></i>
          </div>
          <img className="w-100" src={port2} alt="port2" />
        </div>
      </div>
      
      <div className="col-md-4 col-12">
        <div className={`${Style["box"]}`}>
          <div className={`${Style["overlay"]}`}>
            <i className="fa-solid fa-plus fa-5x"></i>
          </div>
          <img className="w-100" src={port3} alt="port3" />
        </div>
      </div>
      
    </>
  );
}
