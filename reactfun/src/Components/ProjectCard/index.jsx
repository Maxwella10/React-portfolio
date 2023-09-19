import React from 'react';
import projectData from './projectData.json';

function ProjectCard() {
  return (
    <section>
      {projectData.map(project => (
        <div className="card" key={project.title}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.repo}>
            <button>GitHub</button>
          </a>
          <a href={project.live}>
            <button>Live URL</button>
          </a>
        </div>
      ))}
    </section>
  );
}

export default ProjectCard;
