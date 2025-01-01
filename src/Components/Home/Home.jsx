import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import Style from "./Home.module.scss";
import src from "../../assets/home/avataaars.svg";
export default function Home() {
  return (
    <>
      <PageTitle title={"home"} />
      <section className={`${Style["home-sec"]} flex bg-sec sec-h`}>
        <div className="container text-center">
          <div className={`${Style["img-box"]} mx-auto mt-4`}>
            <img className="w-100" src={src} alt="" />
          </div>
          <div className="content-box-white">
            <h2 className="text-uppercase">Start Framework</h2>
            <div className="icons flex mt-3">
              <div className="line"></div>
              <i className="fa-solid fa-star" />
              <div className="line"></div>
            </div>
          </div>
            <p className="mt-3 text-white">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
