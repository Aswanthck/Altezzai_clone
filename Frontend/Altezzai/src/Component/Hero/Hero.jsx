import React from "react";
import "../Hero/Hero.css";
import hero from "../Assets/heroimg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="head-title">
          <p>Empowering Businesses with Innovative Digital Solutions</p>
        </div>
        <div className="head-info">
          Our digital solutions help businesses grow and succeed online
          through a range of services including web development, mobile app
          development, and desktop software development.
        </div>
        <div className="talk-btn">
          <Link to="contact">Talk</Link>
        </div>
      </div>

      <div className="hero-img">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
