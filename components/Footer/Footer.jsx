import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__hr}></div>
      <h1>Contact</h1>
    </div>
  );
}

export default Footer;
