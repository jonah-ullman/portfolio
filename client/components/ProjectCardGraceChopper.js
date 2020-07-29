import React from 'react';

function ProjectCardGraceChopper() {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
          <div className="project-card-image grace-chopper-image" />
          <div className="project-card-content">
            <div className="project-title">Grace Chopper</div>
            <div className="project-tech">
              React | Redux | Express | Sequelize
            </div>
          </div>
        </div>
        <div className="project-card-back">
          <div className="project-card-button-container">
            <a
              href="https://github.com/Grace-Chopper/grace-chopper"
              target="_blank"
            >
              <div className="project-card-button">
                <div>Source Code</div>
              </div>
            </a>
          </div>
          <div className="project-card-description">
            A single-page ecommerce site with support for guests and
            authenticated users. React with Redux for state management in the
            front-end, Express, PostgreSQL and Sequelize in the back-end.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardGraceChopper;
