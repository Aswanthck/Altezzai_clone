import React from "react";
import "../Serv/Serv.css";
import five from "../Assets/five.png";
import two from "../Assets/two.png";
import { Link } from "react-router-dom";

const Serv = () => {
  return (
    <div className="service">
      <div className="servicehead">
        <h1>Our Services</h1>
      </div>
      <div className="servicebody">
        {/* App Development Block */}
        <div className="service-item dark">
          <div className="service-left">
            <div className="service-title">App Development</div>
            <button className="learn-more-btn">
              <span>Learn More</span>
              <img src="" alt="" />
            </button>
          </div>
          <div className="service-right">
            <img src={five} alt="App Development" />
          </div>
        </div>

        {/* Web Development Block */}
        <div className="service-item blue">
          <div className="service-left">
            <div className="service-title">Web Development</div>
            <button className="learn-more-btn">
              <span>Learn More</span>
              <img src="" alt="" />
            </button>
          </div>
          <div className="service-right">
            <img src={two} alt="Web Development" />
          </div>
        </div>
      </div>

      <div className="servicebottom">
        <Link to="services" className="view-more-link">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Serv;
