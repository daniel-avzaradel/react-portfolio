import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__div1}>
        <Link href="/">Daniel Avzaradel</Link>
      </div>
      <div className={styles.header__div2}>
        <li className={styles.header__li}>
          <Link href="#projects">Projects</Link>
        </li>
        <li className={styles.header__li}>
          <Link href="#tech">Technologies</Link>
        </li>
        <li className={styles.header__li}>
          <Link href="#about">About</Link>
        </li>
      </div>
      <div className={styles.header__div3}>
        <li className={styles.header__li}>
          <Link href="https://github.com/daniel-avzaradel">
            <FaGithub size="2rem" className={styles.header__socialIcons} />
          </Link>
        </li>
        <li className={styles.header__li}>
          <Link href="https://www.linkedin.com/in/daniel-avzaradel">
            <FaLinkedin size="2rem" className={styles.header__socialIcons} />
          </Link>
        </li>
        <li className={styles.header__li}>
          <Link href="https://www.instagram.com/daniel.avzaradel">
            <FaInstagram size="2rem" className={styles.header__socialIcons} />
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
