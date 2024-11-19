import React, { useState } from 'react';
import { myProjects } from './myProjects';
import './Main.css';

const Main = () => {
  const [popup, setPopup] = useState({ visible: false, project: null });

  const handleCardClick = (project) => {
    setPopup({ visible: true, project });
  };

  const closePopup = () => {
    setPopup({ visible: false, project: null });
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        {/* Your buttons here */}
      </section>
      <section className="right-section flex">
        {myProjects.map((project, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(project)}>
            <img width={266} src={project.imgPath} alt={project.projectTitle} />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{project.projectTitle}</h1>
              <p className="about">{project.about}</p> {/* Apply about class for truncation */}
              <div className="flex icons">
                <div style={{ gap: "11px" }} className="flex">
                  <a href={project.link}>
                    <div className="icon-link"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      {popup.visible && (
        <Popup project={popup.project} closePopup={closePopup} />
      )}
    </main>
  );
};

import PropTypes from 'prop-types';

const Popup = ({ project, closePopup }) => (
  <div className="popup">
    <div className="popup-content">
      <button className="close-button" onClick={closePopup}>Close</button>
      <div className="popup-body">
        <img src={project.imgPath} alt={project.projectTitle} />
        <div className="popup-text">
          <h2>{project.projectTitle}</h2>
          {project.about && <p>{project.about}</p>} {/* Full "about" text without truncation */}
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  project: PropTypes.shape({
    imgPath: PropTypes.string,
    projectTitle: PropTypes.string,
    about: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Main;
