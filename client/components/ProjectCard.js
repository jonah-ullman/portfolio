import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
          <div className="project-card-header">
            <div>Cuvee Taste Generator</div>
          </div>
          <div className="project-card-image"></div>
        </div>
        <div className="project-card-back">
          <div>React, Firebase, Victory.js</div>
          <div>Learn More</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

//             A tool to connect people with wines they'll enjoy based on the foods
//             they love, with data visualization to enhance the experience.
