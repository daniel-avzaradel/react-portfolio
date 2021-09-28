import React from "react";
import styles from "../Projects/Projects.module.css";
import SectionDivider from "../Utils/SectionDivider";
import ProjectCard from "../Utils/ProjectCard";

function Projects() {
  return (
    <div className={styles.projects__container} id="projects">
      <SectionDivider />
      <h1>Projects</h1>
      <div className={styles.projects__projectsGrid}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
