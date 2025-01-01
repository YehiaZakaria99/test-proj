import React from "react";
import Style from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className={`${Style["footer"]}`}>
        <div className={`${Style["details"]} py-6`}>
          <div className={`container`}>
            <div className={`row gy-4`}>
              <div className="col-md-4 col-12">
                <div className={`${Style["box"]}`}>
                  <h3 className="text-uppercase">Location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className={`${Style["box"]}`}>
                  <h3 className="text-uppercase">Around The Web</h3>
                  <div className={`${Style["icons"]}`}>
                    <Link
                      target="_blank"
                      to={`https://www.facebook.com/yehia.zakaria.902`}
                    >
                      <div className={`${Style["icon-circle"]}`}>
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                    </Link>
                    <Link target="_blank" to={`https://x.com/Yehia16199`}>
                      <div className={`${Style["icon-circle"]}`}>
                        <i className="fa-brands fa-x-twitter"></i>
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      to={`https://www.linkedin.com/in/yehia-zakaria-21a3aa22a/`}
                    >
                      <div className={`${Style["icon-circle"]}`}>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      to={`https://www.spidermancrawlspace.com/`}
                    >
                      <div className={`${Style["icon-circle"]}`}>
                        <i className="fa-solid fa-globe"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className={`${Style["box"]}`}>
                  <h3 className="text-uppercase">About Freelancer</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${Style["copy-right"]} py-4`}>
          <p className="text-center mb-0">Copyright &copy; Your Website 2025</p>
        </div>
      </footer>
    </>
  );
}
