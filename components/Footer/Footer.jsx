import React from "react";
import styles from "./Footer.module.css";
import Social from "./Social";
import Form from "./Form";

function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__hr}></div>
      <h1>Contact</h1>
      <div className={styles.footer__contactContainer}>
        <Social />
        <Form />
      </div>
    </div>
  );
}

export default Footer;
