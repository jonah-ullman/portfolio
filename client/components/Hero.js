import React from 'react';

function Hero() {
  return (
    <div id="hero">
      <div id="hero-header">
        <div id="hero-header-text">
          <div id="name">
            <div id="hello">{"Hello, I'm "}</div>
            <div> Jonah Ullman.</div>
          </div>
          <div id="job-title">I'm a full-stack web developer.</div>
        </div>
        <a href="#projects">
          <div id="projects-button">
            <div className="projects-link">View Projects</div>
            <i id="arrow" className="fas fa-arrow-down"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
// https://www.pexels.com/photo/shallow-focus-photography-of-white-flowers-1369280/
