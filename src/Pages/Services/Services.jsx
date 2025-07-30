import React from "react";
import "../Services/Services.css"
import five from "../../Component/Assets/five.png";
import two from "../../Component/Assets/two.png";
import one from "../../Component/Assets/one.png"; // Placeholder for Web Designing
import three from "../../Component/Assets/three.png"; // Placeholder for Software Design
import four from "../../Component/Assets/four.png"; // Placeholder for E-commerce Dev
import { Link } from "react-router-dom";

const Services = () => {
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

        {/* Web Designing Block */}
        <div className="service-item light">
          <div className="service-left">
            <div className="service-title">Web Designing</div>
            <button className="learn-more-btn">
              <span>Learn More</span>
              <img src="" alt="" />
            </button>
          </div>
          <div className="service-right">
            <img src={one} alt="Web Designing" />
          </div>
        </div>

        {/* Software Design Block */}
        <div className="service-item light">
          <div className="service-left">
            <div className="service-title">Software Design</div>
            <button className="learn-more-btn">
              <span>Learn More</span>
              <img src="" alt="" />
            </button>
          </div>
          <div className="service-right">
            <img src={three} alt="Software Design" />
          </div>
        </div>

        {/* E-commerce Development Block */}
        <div className="service-item blue">
          <div className="service-left">
            <div className="service-title">E-commerce Development</div>
            <button className="learn-more-btn">
              <span>Learn More</span>
              <img src="" alt="" />
            </button>
          </div>
          <div className="service-right">
            <img src={four} alt="E-commerce Development" />
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


export default Services;
