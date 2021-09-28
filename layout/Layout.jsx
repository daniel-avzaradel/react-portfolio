import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "../layout/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout__page}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
