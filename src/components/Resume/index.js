import React from "react";

function Resume() {
  return (
    <div class="portfolio-resume row">
      <div class="large-4 columns">
        <div class="portfolio-resume-wrapper">
          <h3 class="portfolio-resume-header">Resume</h3>
          Click <a href="#">Here</a> to download my resume!
        </div>
      </div>

      <div class="large-4 columns">
        <div class="portfolio-resume-wrapper">
          <h3 class="portfolio-resume-header">Experience</h3>
          <div class="portfolio-resume-spacing">
            <h5>
              <strong>Front-End Proficiencies</strong>
            </h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>responsive design</li>
              <li>BootStrap</li>
            </ul>
          </div>
          <div class="portfolio-resume-spacing">
            <h5>
              <strong>Back-end Proficiencies</strong>
            </h5>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
