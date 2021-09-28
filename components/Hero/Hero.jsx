import React from "react";
import Link from "next/link";
import styles from "../Hero/Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero__container}>
      <h1 className={styles.hero__sectionTitle}>
        Hi! I'm <span className={styles.hero__daniel}>Daniel</span>. <br />
        <span className={styles.hero__developer}>
          JavaScript Full Stack Developer
        </span>
      </h1>
      <p className={styles.hero__sectionText}>
        This website was created to showcase react projects, expand my
        development skills as an aspiring developer and create opportunities to
        job oportunities and network.
      </p>
      <br />
      <button className={styles.hero__learnMore} type="button">
        <Link href="#about">Learn More</Link>
      </button>
    </div>
  );
}

export default Hero;
