import React from 'react';

function ProjectCardJoin() {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
          <div className="project-card-image join-image" />
          <div className="project-card-content">
            <div className="project-title">.join()</div>
            <div className="project-tech">
              React | Redux | Firebase | Twilio
            </div>
          </div>
        </div>
        <div className="project-card-back">
          <div className="project-card-button-container">
            <a
              href="https://github.com/Yellow-Team-Capstone-Project/JoinCapstone"
              target="_blank"
            >
              <div className="project-card-button">
                <div>Source Code</div>
              </div>
            </a>
          </div>
          <div className="project-card-description">
            A Tinder-style remote networking app for technology professionals.
            Features include custom video chat client built with Twilio
            Programmable Video, direct messaging leveraging the realtime
            capabilities of Google Cloud Firestore, and calendar to keep track
            of networking appointments.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardJoin;
