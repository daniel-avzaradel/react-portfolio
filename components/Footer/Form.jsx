import React from "react";
import styles from "./Footer.module.css";

function Form() {
  return (
    <div className={styles.footer__contactForm}>
      <form className={styles.footer__form} autoComplete="off">
        <input type="text" id="name" placeholder="Name" />
        <input type="text" id="email" placeholder="email" />
        <textarea id="message" placeholder="message" rows="6"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;
