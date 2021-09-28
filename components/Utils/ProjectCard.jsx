import React from "react";
import styles from "../Utils/ProjectCard.module.css";
import { image3 } from "../../public/images/3.jpg";

function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <img src={image3} className={styles.projectCard__img} />
      <div className={styles.projectCard__title}>Title</div>
      <div className={styles.projectCard__divider}></div>
    </div>
  );
}

export default ProjectCard;
