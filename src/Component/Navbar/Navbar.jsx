import React, { useState } from "react";
import "./Navbar.css";
import altezzai from "../Assets/logo-only.png";
import log from "../Assets/logo 2.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" src={altezzai} alt="Logo" />
        <img src={log} alt="" className="log" />
      </div>

      {/* Hamburger toggle */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-select">&#9776;</label>

      <div className="nav-links">
        <ul className="nav-menu">
          <li onClick={() => setMenu("home")}>
            <Link to="/">Home</Link>
            {menu === "home" && <hr />}
          </li>
          <li onClick={() => setMenu("about")}>
            <Link to="/about">About Us</Link>
            {menu === "about" && <hr />}
          </li>
          <li onClick={() => setMenu("service")}>
            <Link to="/services">Services</Link>
            {menu === "service" && <hr />}
          </li>
          <li onClick={() => setMenu("work")}>
            <Link to="/work">Our Work</Link>
            {menu === "work" && <hr />}
          </li>
          <li onClick={() => setMenu("team")}>
            <Link to="/team">Our Team</Link>
            {menu === "team" && <hr />}
          </li>
          <li onClick={() => setMenu("product")}>
            <Link to="/product">Our Product</Link>
            {menu === "product" && <hr />}
          </li>
          <li className="contact-btn">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
