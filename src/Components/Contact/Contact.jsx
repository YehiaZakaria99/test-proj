import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import Form from "./Form";
import Style from "./Contact.module.scss";
export default function Contact() {
  return (
    <>
      <PageTitle title={"contact"} />
      <section className="sec-h">
        <div className="container">
          <div className="content-box-dark">
            <h2 className="text-uppercase my-3">Contact Section</h2>
            <div className="icons flex my-3">
              <div className="line"></div>
              <i className="fa-solid fa-star" />
              <div className="line"></div>
            </div>
          </div>
          <div className={`${Style["form"]} mx-auto`}>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
