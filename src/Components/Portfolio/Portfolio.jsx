import React, { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import PortfolioChild from "./PortfolioChild";
import Style from "./Portfolio.module.scss";
import ShowImg from "./ShowImg";
import port1 from "../../assets/portfolio/port1.png";
import port2 from "../../assets/portfolio/port2.png";
import port3 from "../../assets/portfolio/port3.png";

export default function Portfolio() {
  const [imgs, setImgs] = useState([
    { src: port1 },
    { src: port2 },
    { src: port3 },
    { src: port1 },
    { src: port2 },
    { src: port3 },
  ]);

  const [src, setSrc] = useState("");
  const [handleImg, setHandleImg] = useState(false);

  function getImgSrc(el) {
    setSrc(el.currentTarget.children[1].src);
    setHandleImg(true);
  }

  function hideImage(el) {
    !el.target.hasAttribute("src") && setHandleImg(false);
  }
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
            {imgs.map((img, index) => (
              <div className="col-md-6 col-lg-4 col-12" key={index}>
                <PortfolioChild
                  getImgSrc={getImgSrc}
                  imgSrc={img.src}
                  imgAlt={`port${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={(el) => hideImage(el)}
          className={`${Style["show-img"]} ${handleImg ? "d-flex" : "d-none"}`}
        >
          <ShowImg src={src} imgAlt={`port`} />
        </div>
      </section>
    </>
  );
}
