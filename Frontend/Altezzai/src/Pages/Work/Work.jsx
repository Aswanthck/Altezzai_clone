// Work.js
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Work.css";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios("https://backend.altezzai.com/api/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="work-container">
      {
      projects.map((project) => (
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

export default Work;
