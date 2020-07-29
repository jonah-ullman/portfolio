import React from 'react';

function ProjectCardCuvee() {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
          <div className="project-card-image cuvee-image" />
          <div className="project-card-content">
            <div className="project-title">Cuvee</div>
            <div className="project-tech">React | Firebase | Victory.js</div>
          </div>
        </div>
        <div className="project-card-back">
          <div className="project-card-button-container">
            <a
              href="https://github.com/jonah-ullman/cuvee-taste-generator"
              target="_blank"
            >
              <div className="project-card-button">
                <div>Source Code</div>
              </div>
            </a>
            <a href="https://cuvee-taste-generator.web.app/" target="_blank">
              <div className="project-card-button">
                <div>Demo</div>
              </div>
            </a>
          </div>
          <div className="project-card-description">
            A tool to connect people with wines they'll enjoy based on the foods
            they love, with data visualization to enhance the experience. Built
            solo in a 4-day sprint.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardCuvee;
