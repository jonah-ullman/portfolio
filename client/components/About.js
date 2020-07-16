import React from 'react';
import { Logos } from '.';

function About() {
  return (
    <div id="about">
      <div id="about-title-container">
        <div id="about-title">About</div>
        <hr />
      </div>
      <div id="about-content">
        <div
          id="bio"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <div id="headshot-container">
            <img src="/headshot.jpg" id="headshot" />
          </div>
          <div>
            I'm a full-stack web developer in Chicago looking for a new role.
          </div>
        </div>
        <div
          id="technologies"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          {/* <div id="technologies-title">Technologies</div> */}
          <Logos />
          <div id="technologies-copy">
            These are the technologies I work with on a regular basis.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
