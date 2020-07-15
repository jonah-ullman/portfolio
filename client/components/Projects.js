import React from 'react';
import { ProjectCard } from '.';

function Projects() {
  return (
    <div id="projects">
      <div id="projects-title">Projects</div>
      <div id="project-cards-container">
        <ProjectCard />
      </div>
      <a href="#about">
        <i className="far fa-arrow-alt-circle-down down-arrow"></i>
      </a>
    </div>
  );
}

export default Projects;
