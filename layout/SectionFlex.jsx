import React from "react";
import styles from "../layout/Section.module.css";

function SectionFlex({ children }) {
  return <section className={styles.section__flex}>{children}</section>;
}

export default SectionFlex;
