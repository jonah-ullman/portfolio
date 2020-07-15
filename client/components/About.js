import React from 'react';
import { Logos } from '.';

function About() {
  return (
    <div id="about">
      <div id="about-title">About</div>
      <div id="about-content">
        <div
          id="bio"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <img src="/headshot.jpg" id="headshot" />
          <div>blah blah blah blah</div>
        </div>
        <div
          id="technologies"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <div id="technologies-title">Technologies</div>
          <Logos />
        </div>
      </div>
    </div>
  );
}

export default About;
