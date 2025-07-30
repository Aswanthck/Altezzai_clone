import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import location from "../Assets/location.svg";
import altz from "../Assets/altezzai_logo.svg";
import github from "../Assets/github.svg";
import linkedin from "../Assets/linkedin.svg";
import instagram from "../Assets/instagram.svg";
import mail from "../Assets/mail.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-one">
        <a href="enquiry@altezzai.com" className="onee">
          <div className="contactlogs">
            <img src={mail} alt="" />
          </div>
          enquiry@altezzai.com
        </a>
        <a
          className="footer-onee"
          href="https://maps.app.goo.gl/nhKKwD8Hbd6DutwR7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="im">
            <img src={location} alt="Location" />
          </div>
          Kannur University Campus Mangattuparamba
        </a>
      </div>

      <div className="footer-two">
        <Link className="logo" to="/">
          <img src={altz} alt="Altezzai Logo" />
        </Link>
        <div className="social">
          <a
            href="https://www.instagram.com/altezzai_/"
            className="insta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://github.com/altezzai"
            className="git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/company/altezzai"
            className="linked"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <ul className="footnavbar">
          <li>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"} style={{ textDecoration: "none" }}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/work"} style={{ textDecoration: "none" }}>
              Our Work
            </Link>
          </li>
          <li>
            <Link to={"/team"} style={{ textDecoration: "none" }}>
              Our Team
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-three">
        <div className="copyright">
          © 2024 Altezzai LLP. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
