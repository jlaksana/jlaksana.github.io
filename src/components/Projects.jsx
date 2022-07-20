import React from "react";
import ProjectCard from "./ProjectCard";
import Typography from "@mui/material/Typography";
import projects from "../projects";
import "../css/Projects.css";

function Projects() {
  return (
    <div className="projectsPage" id="projects">
      <Typography variant="h4" color="primary">
        Projects
      </Typography>
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
