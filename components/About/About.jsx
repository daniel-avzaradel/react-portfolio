import React from "react";
import styles from "../About/About.module.css";
import SectionDivider from "../Utils/SectionDivider";

// import Image from "next/image";

function About() {
  return (
    <div className={styles.about__container} id="about">
      <SectionDivider />
      <h1>About Me</h1>
      <div className={styles.about__div}>
        {/* <div className={styles.about__imgDiv}>
          <Image
            src={"/../public/images/daniel.jpg"}
            alt="Daniel Avzaradel profile"
            width="2000"
            height="2000"
            className={styles.about__img}
          />
        </div> */}
        <div className={styles.about__content}>
          I am a former classical musician, pianist, composer, music producer.
          Born in Rio de Janeiro, Brazil, moved to Israel at the age of 25 in
          October 2013. In Israel started working at Wix.com as a part-time job
          as a Customer Support Specialist - Portuguese while also studying for
          a B.A. in Music Composition at the University of Haifa. Also studied
          Music Production for a period of two and a half years at BPM College -
          Tel Aviv from December 2018 till March 2021, focused on writing
          orchestral music for media (Films, TV, Video-games). You can see more
          here{" "}
          <a
            href="https://danielavzaradel.wixsite.com/composer"
            target="_blank"
            rel="noreferrer"
            style={{ color: "cyan" }}
          >
            danielavzaradel.wixsite.com/composer
          </a>
          <br />
          <br />
          During the high of the pandemic, in September 2020, with the help of
          an automation test software engineer and friend, started studying
          coding on spare time, completing the 300 hours program for Responsive
          Web Design at FreeCodeCamp.org. Pushed through the coding career by
          starting the JavaScript, Algoithms and Data Structure program from the
          same website and later on, in April 2021, being approved for the
          selected program JavaScript Full Stack Development from Developers
          Institute, Tel Aviv, graduating in July 2021 being the top of his
          class.
          <br />
          <br />
          Currently finishing a two-month internship as a React Front-End
          Developer at{" "}
          <a
            href="https://appdrag.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "cyan" }}
          >
            AppDrag - A cloud development platform
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
