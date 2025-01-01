import React, { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import PortfolioChild from "./PortfolioChild";

export default function Portfolio() {
  // const [box, setBox] = useState({
  //   port1 : "port1",
  //   port2 : "port1",
  //   port3 : "port1",
  // });


  
  return (
    <>
      <PageTitle title={"portfolio"} />
      <section className="">
        <div className="container">
          <div className="content-box-dark">
            <h2 className="text-uppercase my-3">Portfolio Component</h2>
            <div className="icons flex my-3">
              <div className="line"></div>
              <i className="fa-solid fa-star" />
              <div className="line"></div>
            </div>
          </div>
          <div className="row g-5">
            <PortfolioChild />
            <PortfolioChild />
          </div>
        </div>
      </section>
    </>
  );
}
