import React from "react";
import "../Ourproduct/Ourproduct.css";
import clue from "../Assets/cluesinsight_icon.png";
import tick from "../Assets/tick.svg";
import speed from "../Assets/speed.png";
import bg from "../Assets/bg.jpeg";
import ai_bg from "../Assets/ai_bg.jpeg";
import scalable from "../Assets/scalable.png";
import screen1 from "../Assets/screen1.png";
import screen2 from "../Assets/screen2.png";
const Ourproduct = () => {
  return (
    <>
      {/* Cluesinsight Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title">
            <div className="hero-brand">
              <img src={clue} alt="cluesinsight logo" className="logo-img" />
              Cluesinsight
            </div>
            <div>Transforming</div>
            <div>
              <span className="highlight">Data Analysis</span> for
            </div>
            <div>Investigative Agencies</div>
          </div>
          <p className="hero-description">
            Cluesinsight makes analyzing large volumes of call data fast, easy,
            and efficient for investigators, reducing time and effort with its
            user-friendly interface and AI-driven insights.
          </p>
          <div className="hero-cta">
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
            <a href="/contact" className="btn-primary">
              Request a Demo
            </a>
          </div>
        </div>


        <div className="over">
          <img src={screen1} alt="" className="src1" />
          <img src={screen2} alt="" className="src2" />
        </div>
      </div>


      <div className="cdr-section">
        <div className="cdr-content">
          <h4 className="cdr-subtitle">The Challenge</h4>
          <h2 className="cdr-title">
            Cluesinsight is Simplifying CDR/IPDR Analysis
          </h2>
          <p className="cdr-description">
            Investigative agencies often struggle with handling vast amounts of
            Call Detail Records (CDRs), with manual analysis being
            time-consuming and prone to errors. With the rise of mobile phone
            usage, the volume of data has increased exponentially, making
            traditional analysis methods obsolete.
          </p>
          <div className="cdr-features">
            <div className="cdr-feature">
              <img src={tick} alt="tick" />
              <span>
                Easy-to-use interface with no technical skills required
              </span>
            </div>
            <div className="cdr-feature">
              <img src={tick} alt="tick" />
              <span>
                AI-powered natural language queries to extract relevant data
              </span>
            </div>
            <div className="cdr-feature">
              <img src={tick} alt="tick" />
              <span>
                Advanced visualizations for better data interpretation
              </span>
            </div>
            <div className="cdr-feature">
              <img src={tick} alt="tick" />
              <span>
                Designed for investigative workflows and faster insights
              </span>
            </div>
          </div>
        </div>
      </div>

  
      <div className="features-section">
        <h2 className="features-title">Features Designed for Efficiency</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3 className="feature-heading">Natural Language Queries</h3>
            <p className="feature-text">
              Use simple, everyday language to query the database
            </p>
          </div>
          <div className="feature-box">
            <h3 className="feature-heading">Customizable Filters</h3>
            <p className="feature-text">
              Filter by date, call type, or specific contacts
            </p>
          </div>
          <div className="feature-box">
            <h3 className="feature-heading">Data Visualization</h3>
            <p className="feature-text">
              Get insights through clear graphs and visual data presentations
            </p>
          </div>
          <div className="feature-box">
            <h3 className="feature-heading">AI-Powered Insights</h3>
            <p className="feature-text">
              Integrated with OpenAI's framework for intelligent data retrieval
            </p>
          </div>
        </div>
      </div>


      <div className="capabilities-wrapper">
        <div className="capabilities-subtitle">Why us</div>
        <div className="capabilities-heading">
          <span>Why Investigators Choose</span>
          <span> Cluesinsight</span>
        </div>
        <div className="capabilities-container">
          <div className="capability-item">
            <div className="capability-title">Speed and Efficiency</div>
            <div className="capability-image-wrapper">
              <img
                src={speed}
                alt="Speed and Efficiency"
                className="capability-image"
              />
            </div>
            <div className="capability-text">
              Drastically reduces analysis time from hours to minutes.
            </div>
          </div>

          <div className="capability-item image-bg1">
            <img src={bg} alt="User-Friendly" className="background-image" />
            <div className="gradient-overlay"></div>
            <div className="capability-title">User-Friendly</div>
            <div className="capability-text">
              No need for technical or programming expertise.
            </div>
          </div>

          <div className="capability-item image-bg">
            <img
              src={ai_bg}
              alt="Comprehensive Insights"
              className="background-image"
            />
            <div className="gradient-overlay"></div>
            <div className="capability-title">Comprehensive Insights</div>
            <div className="capability-text">
              Uncover hidden patterns and connections between individuals.
            </div>
          </div>

          <div className="capability-item">
            <div className="capability-title">Scalability</div>
            <div className="capability-image-wrapper">
              <img
                src={scalable}
                alt="Scalability"
                className="capability-image"
              />
            </div>
            <div className="capability-text">
              Analyze large volumes of data with ease, no matter the case size.
            </div>
          </div>
        </div>
      </div>
      <div class="cta-wrapper">
        <div class="cta-box">
          <div class="cta-left">
            <div class="cta-title">Get Started with Cluesinsight Today</div>
            <div class="cta-subtext">
              Ready to transform your investigative process? Contact us now to
              book a demo or request pricing.
            </div>
          </div>
          <div class="cta-buttons">
            <a href="/contact" class="cta-btn outline">
              Contact Us
            </a>
            <a href="/contact" class="cta-btn filled">
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourproduct;
