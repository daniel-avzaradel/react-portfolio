import React from "react";
import styles from "../About/About.module.css";
import SectionDivider from "../Utils/SectionDivider";

function About() {
  return (
    <div className={styles.about__container} id="about">
      <SectionDivider />
      <h1>About Me</h1>
      <div className={styles.about__div}>
        <img
          src="https://avatars.githubusercontent.com/u/72406621?s=400&u=cdb8fcf76e4fab459062c8abac0abcd2852b66c2&v=4"
          alt=""
          className={styles.about__img}
        />
        <div className={styles.about__content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          molestias odio corporis, quidem at ut culpa, doloremque quo quam
          facere fugiat! Voluptatem necessitatibus non tenetur, illo provident
          quos nisi quis est quas adipisci officia, eaque aliquam iste
          aspernatur itaque accusamus unde at, nihil obcaecati quae perferendis.
          Blanditiis ipsam nesciunt quos omnis voluptatum voluptas. Ut,
          repellendus impedit, quo quia nostrum eaque, iste accusantium
          exercitationem officia fugit esse dignissimos ducimus est soluta odio
          quis vel saepe architecto itaque! Voluptatum voluptas aliquam esse
          illum deserunt maxime quaerat, quia aliquid, eveniet omnis laborum
          accusamus hic nisi iste numquam nam dolorem! Numquam explicabo
          pariatur quibusdam?
        </div>
      </div>
    </div>
  );
}

export default About;
