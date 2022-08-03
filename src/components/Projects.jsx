import Typography from "@mui/material/Typography";
import React from "react";
import "../css/Projects.css";
import projects from "../projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projectsPage" id="projects">
      <Typography variant="h4">Projects</Typography>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            img={project.image}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
