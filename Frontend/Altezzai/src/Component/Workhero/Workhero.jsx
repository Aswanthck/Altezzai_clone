import React, { useEffect, useState } from "react";
import "../Workhero/Workhero.css";
import axios from "axios";

const Workhero = () => {
  const [wrk, setwrk] = useState([]);
  useEffect(() => {
    axios("https://backend.altezzai.com/api/projects")
      .then((res) => {
        setwrk(res.data.slice(0, 2));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="work-container">
      <h2>Our Work</h2>
      {wrk.map((project) => (
        <div key={project.id} className="work-card">
          <div className="image-wrapper">
            <img
              src={`https://backend.altezzai.com/images/${project.image2}`}
              alt="Back"
              className="image back-image"
            />
            <img
              src={`https://backend.altezzai.com/images/${project.image1}`}
              alt="Front"
              className="image front-image"
            />
          </div>
          <h3 className="work-title">{project.project_name}</h3>
          <p className="work-description">{project.description}</p>
          {project.url && (
            <div className="button-wrapper">
              <a
                href={project.url}
                className="work-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Workhero;
