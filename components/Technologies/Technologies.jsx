import React from "react";
import styles from "../Technologies/Technologies.module.css";
import SectionDivider from "../Utils/SectionDivider";

import { FaReact, FaDatabase, FaServer } from "react-icons/fa";

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
            Front-end developement skills such as HTML, CSS3, JS, React.JS,
            Bootstrap, Styled Components, SaSS
          </p>
        </div>
        <div className={styles.technologies__stackDiv}>
          <FaServer size="36px" />
          <h3>Back-End</h3>
          <p>
            Server side with some experience on Node.js and Next.js. Postman for
            http requests. Deployment with heroku or vercel for nextjs.
          </p>
        </div>
        <div className={styles.technologies__stackDiv}>
          <FaDatabase size="36px" />
          <h3>Database</h3>
          <p>Database practices with PostgreSQL and node.js</p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Technologies;
