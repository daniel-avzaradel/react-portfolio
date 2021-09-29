import React from "react";
import styles from "./Footer.module.css";
import { BiEnvelope } from "react-icons/bi";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa";

function Social() {
  return (
    <div className={styles.footer__contactInfo}>
      <a href="mailto:daniel.avzaradel@gmail.com">
        <div className={styles.footer__contactRow}>
          <BiEnvelope size="36px" color={"cyan"} />
          Email: daniel.avzaradel@gmail.com
        </div>
      </a>

      <a href="https://www.linkedin.com/in/daniel-avzaradel/" target="_blank">
        <div className={styles.footer__contactRow}>
          <FaLinkedin size="36px" color={"cyan"} />
          LinkedIn: linkedin.com/in/daniel-avzaradel
        </div>
      </a>

      <a href="https://github.com/daniel-avzaradel" target="_blank">
        <div className={styles.footer__contactRow}>
          <FaGithub size="36px" color={"cyan"} />
          GitHub: github.com/daniel-avzaradel
        </div>
      </a>

      <a href="https://www.instagram.com/daniel.avzaradel/" target="_blank">
        <div className={styles.footer__contactRow}>
          <FaInstagram size="36px" color={"cyan"} />
          Instagram: instagram.com/daniel.avzaradel
        </div>
      </a>

      <a href="https://soundcloud.com/daniel-avzaradel" target="_blank">
        <div className={styles.footer__contactRow}>
          <FaSoundcloud size="36px" color={"cyan"} />
          Soundcloud: soundcloud.com/daniel-avzaradel
        </div>
      </a>
    </div>
  );
}

export default Social;
