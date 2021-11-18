import React, { useState } from "react";
import Logo from "./svgs/logo.svg";
import Hamburger from "./svgs/icon-hamburger.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="hero">
        <nav className="navbar">
          <img src={Logo} alt="" />
          <button type="button" className="btn-menu" onClick={handleOpen}>
            <img src={Hamburger} alt="" />
          </button>
        </nav>
        <div
          className={`${
            isOpen ? "links-container  show-links" : "links-container"
          }`}
        >
          <Link to="about" smooth={true} onClick={handleOpen}>
            <p id="pge">About</p>
          </Link>
          <Link to="full-crowdfunding" smooth={true} onClick={handleOpen}>
            <p id="pge">Discover</p>
          </Link>
          <Link to="footer" smooth={true} onClick={handleOpen}>
            <p id="pge">Contact Us</p>
          </Link>
          <Link to="all-reward" smooth={true} onClick={handleOpen}>
            <p>Get Started</p>
          </Link>
        </div>
      </div>
    </>
  );
};
