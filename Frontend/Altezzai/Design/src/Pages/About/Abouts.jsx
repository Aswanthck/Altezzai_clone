import React from "react";
import "../CSS/About.css";
import union from "../../Component/Assets/Union.webp";
import vector from "../../Component/Assets/vector.webp"; // background vector

const Abouts = () => {
  return (
    <div className="about">
      {/* Vector positioned background image */}
      <img className="bg-vector" src={vector} alt="vector" />

      {/* Heading Section */}
      <div className="ab">
        <div className="abtop">
          <h1>About</h1>
        </div>
        <div className="abbottom">
          Welcome to AltezzAi LLP, a startup incubated by Department of
          Information Technology, Kannur University
        </div>
      </div>

      {/* Main About Section */}
      <div className="about-content">
        {/* Left side: image with heading on top */}
        <div className="about-bgimg">
          <img
            className="unionimg"
            src={union}
            alt="Union background"
            draggable="false"
          />
          <div className="about-bgimg-heading">
            Empowering Businesses with Inoovative Digital Solutions
          </div>
        </div>

        {/* Right side: paragraphs */}
        <div className="about-info">
          <p>
            Welcome to AltezzAi, a dynamic startup rooted in the vibrant
            ecosystem of the Kannur University Incubation Center. Supported by
            esteemed faculty members, we are dedicated to crafting innovative
            solutions that empower businesses to thrive in the digital
            landscape.
          </p>
          <p>
            At AltezzAi, we specialize in providing service-driven technology
            solutions tailored to meet the unique needs of our clients. Our
            expertise spans across web development, mobile app development, and
            desktop software development. We build responsive, user-friendly
            websites that enhance your online presence, create intuitive and
            engaging mobile applications for both iOS and Android platforms, and
            develop robust desktop applications that streamline your business
            processes.
          </p>
          <p>
            Whether you're a budding entrepreneur or an established enterprise,
            our team is committed to understanding your vision and transforming
            it into reality. We leverage cutting-edge technology to develop
            innovative solutions that keep you ahead of the competition, and our
            tailored approach ensures that our solutions meet your specific
            needs and objectives.
          </p>
          <p>
            Join us on this exciting journey as we create digital solutions that
            empower businesses to thrive. At AltezzAi, we are not just building
            technology; we are shaping the future. Ready to take your business
            to the next level? Contact us today to learn how AltezzAi can help
            you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
