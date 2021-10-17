import React from "react";
import { ProjectsContainer, ProjectsH1 } from "./ProjectsElements";
import ProjectCard from "../ProjectCard";
import { projectOne, projectTwo } from "../ProjectCard/Data";

const ProjectsSection = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectCard {...projectOne} />
      <ProjectCard {...projectTwo} />
    </ProjectsContainer>
  );
};

export default ProjectsSection;
