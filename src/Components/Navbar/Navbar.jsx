import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { animateScroll as scroll } from 'react-scroll';
import Style from "./Navbar.module.scss";


export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${Style["navbar"]} ${scrolling ? "py-1" : "py-3"}`}>
        <div className="container">
          <Link
            className={`navbar-brand ${Style["navLogo"]} text-uppercase`}
            to=""
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${Style["nav-links"]}`}
            id="navbarSupportedContent"
          >
            <ul
              className={`navbar-nav ms-auto mb-2 mb-lg-0 ${Style["links-list"]}`}
            >
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
