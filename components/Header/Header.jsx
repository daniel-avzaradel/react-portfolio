import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.header__container} id="header">
      <div className={styles.header__div1}>
        <Link href="#header" passHref>
          Daniel Avzaradel
        </Link>
      </div>
      <div className={styles.header__div2}>
        <li className={styles.header__li}>
          <Link href="#about" passHref>
            About
          </Link>
        </li>
        <li className={styles.header__li}>
          <Link href="#projects" passHref>
            Projects
          </Link>
        </li>
        <li className={styles.header__li}>
          <Link href="#tech" passHref>
            Technologies
          </Link>
        </li>
        <li className={styles.header__li}>
          <Link href="#footer" passHref>
            Contact
          </Link>
        </li>
      </div>
      <div className={styles.header__div3}>
        <li className={styles.header__li}>
          <a
            href="https://github.com/daniel-avzaradel"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="2rem" className={styles.header__socialIcons} />
          </a>
        </li>
        <li className={styles.header__li}>
          <a
            href="https://www.linkedin.com/in/daniel-avzaradel"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="2rem" className={styles.header__socialIcons} />
          </a>
        </li>
        <li className={styles.header__li}>
          <a
            href="https://www.instagram.com/daniel.avzaradel"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size="2rem" className={styles.header__socialIcons} />
          </a>
        </li>
      </div>
    </div>
  );
}

export default Header;
