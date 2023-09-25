//import React from 'react';
//import ProjectCard from '../../Components/ProjectCard';

//function ProjectGallery() {
//  return (
  //  <div>
    //  <h1>Project Gallery</h1>
      //<ProjectCard />
    //</div>
  //);
//}

//export default ProjectGallery;


import ProjectCard from '../../components/ProjectCard';
// Import the list of projects from the utils folder
// import projects from "../../components/ProjectCard/projectData.json";

function ProjectGallery() {
  console.log(<ProjectCard />)
  return (
    <section
      id="work"
      className="py-5 d-flex justify-content-center align-items-center"
    >
      <div className="container row gap-4 ">
        <div className="pt-2 ">
          <h2 className="display-5 fw-bold text-center text-lg-start">
            Projects I&apos;ve Work On
          </h2>
        </div>
        <div className="row">
          {/* Map through the list of projects and render a ProjectCard for each
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              id={project.id}
            />
          ))} */}
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
