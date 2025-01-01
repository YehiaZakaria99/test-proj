import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import Style from "./About.module.scss";

export default function About() {
  return (
    <>
      <PageTitle title={"about"} />
      <section className={`${Style["about-sec"]} flex bg-sec sec-h`}>
        <div className="container">
          <div className="content-box-white">
            <h2 className="text-uppercase my-3">About Component</h2>
            <div className="icons flex my-3">
              <div className="line"></div>
              <i className="fa-solid fa-star" />
              <div className="line"></div>
            </div>
          </div>
          <div className="details my-3 flex gap-1 text-white">
            <p className="">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
