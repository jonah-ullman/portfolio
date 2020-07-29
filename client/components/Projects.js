import React from 'react';
import { ProjectCardCuvee, ProjectCardJoin, ProjectCardGraceChopper } from '.';

function Projects() {
  return (
    <div id="projects">
      <div id="projects-title-container">
        <div id="projects-title">Projects</div>
        <hr />
      </div>
      <div id="project-cards-container">
        <ProjectCardCuvee />
        <ProjectCardJoin />
        <ProjectCardGraceChopper />
      </div>
      <a href="#about">
        <i className="far fa-arrow-alt-circle-down down-arrow"></i>
      </a>
    </div>
  );
}

export default Projects;
