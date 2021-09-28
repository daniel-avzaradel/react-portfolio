import React from "react";
import styles from "../layout/Section.module.css";

function SectionGrid({ children }) {
  return <section className={styles.section__grid}>{children}</section>;
}

export default SectionGrid;
