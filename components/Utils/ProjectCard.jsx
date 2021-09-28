import React from "react";
import styles from "../Utils/ProjectCard.module.css";
import { image3 } from "../../public/images/3.jpg";

function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <img src={image3} className={styles.projectCard__img} />
      <div className={styles.projectCard__title}>Title</div>
      <div className={styles.projectCard__divider}></div>
      <br />
      <div className={styles.projectCard__content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        obcaecati voluptatem, reiciendis nesciunt qui nisi ullam, accusamus
        consequatur est ipsa incidunt sapiente? Deleniti accusamus saepe iste,
        inventore ullam recusandae labore sit hic in voluptate perspiciatis fuga
        quas qui officiis, repellendus facere, laborum itaque sunt modi debitis
        voluptas.
      </div>
    </div>
  );
}

export default ProjectCard;
