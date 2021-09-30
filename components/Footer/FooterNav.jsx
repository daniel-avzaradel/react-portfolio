import React from "react";
import Link from "next/link";
import styles from "./FooterNav.module.css";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function FooterNav() {
  return (
    <div className={styles.footerNav__container}>
      <div className={styles.footerNav__div1}>
        <Link href="#header" passHref>
          Daniel Avzaradel
        </Link>
      </div>
      <div className={styles.footerNav__div2}>
        <li className={styles.footerNav__li}>
          <Link href="#about" passHref>
            About
          </Link>
        </li>
        <li className={styles.footerNav__li}>
          <Link href="#projects" passHref>
            Projects
          </Link>
        </li>
        <li className={styles.footerNav__li}>
          <Link href="#tech" passHref>
            Technologies
          </Link>
        </li>
        <li className={styles.footerNav__li}>
          <Link href="#footer" passHref>
            Contact
          </Link>
        </li>
      </div>
      <div className={styles.footerNav__div3}></div>
    </div>
  );
}

export default FooterNav;
