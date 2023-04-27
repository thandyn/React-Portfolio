import React from "react";

function ProjectCard({ project }) {
  const { name, description, link, repo } = project;

  return (
    <div className="project-container" key={name}>
      <div class="card mb-3" style={{ width: 540 }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{description}</p>
              <a href={repo}>
                <i class="bi bi-github"></i>
              </a>
              <a href={link}>
                <i class="bi bi-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
