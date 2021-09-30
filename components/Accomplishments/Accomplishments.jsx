import React from "react";
import Image from "next/image";
import SectionDivider from "../Utils/SectionDivider";

import styles from "../Accomplishments/Accomplishments.module.css";

import DIdiploma from "../../public/images/DIdiploma.jpg";
import FCCdiploma from "../../public/images/webdesigner-diploma.png";

function Accomplishments() {
  return (
    <div className={styles.accomplishments__container} id="accomplishments">
      <SectionDivider />
      <h1>Accomplishments</h1>
      <div className={styles.accomplishments__cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.imgDiv}>
            <Image
              src={DIdiploma}
              layout="intrinsic"
              className={styles.accomplishments__imgTag}
            ></Image>
          </div>
          <p>Developers Institute graduate - April, 2021 - July, 2021</p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imgDiv}>
            <Image
              src={FCCdiploma}
              layout="intrinsic"
              className={styles.accomplishments__imgTag}
            ></Image>
          </div>
          <p>FreeCodeCamp.org Certified Responsive Web Designer - Sep, 2020</p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imgDiv}>
            <Image
              src={DIdiploma}
              layout="intrinsic"
              className={styles.accomplishments__imgTag}
            ></Image>
          </div>
          <p>Developers Institute graduate - April, 2021 - July, 2021</p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Accomplishments;
