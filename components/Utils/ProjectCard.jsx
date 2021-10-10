import React from "react";
import styles from "../Utils/ProjectCard.module.css";
import Image from "next/image";

function ProjectCard({ title, description, tags, source }) {
  return (
    <div className={styles.projectCard}>
      <a href={source}>
        <div className={styles.projectCard__title}>{title}</div>
        <div className={styles.projectCard__divider}></div>
        <div className={styles.projectCard__content}>{description}</div>
        <div className={styles.projectCard__tags}>
          {tags.map((tag, i) => {
            return (
              <button className={styles.projectCard__tagBtn} key={i}>
                {tag}
              </button>
            );
          })}
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
