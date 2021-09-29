import React from "react";
import styles from "./Footer.module.css";
import Social from "./Social";
import Form from "./Form";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <div className={styles.footer__container} id="footer">
      <div className={styles.footer__hr}></div>
      <h1>Contact</h1>
      <div className={styles.footer__contactContainer}>
        <Social />
        <Form />
      </div>
      <br />
      <br />
      <FooterNav />
    </div>
  );
}

export default Footer;
