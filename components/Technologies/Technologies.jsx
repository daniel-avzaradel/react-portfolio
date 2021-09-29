import React from "react";
import styles from "../Technologies/Technologies.module.css";
import SectionDivider from "../Utils/SectionDivider";

import { FaReact, FaDatabase } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

function Technologies() {
  return (
    <div className={styles.technologies__container} id="tech">
      <SectionDivider />
      <h1>Technologies</h1>
      <div className={styles.technologies__stack}>
        <div className={styles.technologies__stackDiv}>
          <FaReact size="36px" />
          <h3>Front-End</h3>
          <p>
            front-end developement skills such as HTML, CSS3, JS, React.JS,
            Bootstrap, Styled Components, SaSS
          </p>
        </div>
        <div className={styles.technologies__stackDiv}>
          <FaDatabase size="36px" />
          <h3>Back-End</h3>
          <p>
            front-end developement skills such as HTML, CSS3, JS, React.JS,
            Bootstrap, Styled Components, SaSS
          </p>
        </div>
        <div className={styles.technologies__stackDiv}>
          <CgFigma size="36px" />
          <h3>UX / UI</h3>
          <p>
            front-end developement skills such as HTML, CSS3, JS, React.JS,
            Bootstrap, Styled Components, SaSS
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Technologies;
