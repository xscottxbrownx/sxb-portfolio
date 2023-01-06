// Style Imports
import styles from "./About.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";

// ABOUT ME TEXT - make any changes here
const aboutMainText = (
  <p>
    Using a multitude of online resources, my time is dedicated to learning as
    much as I can about web developement, while owning and running{" "}
    <a
      href="https://www.birdmafia.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class={styles.aboutLink}>bird mafia</span>
    </a>{" "}
    with my wife. My 19 year career in big box retail management has prepared me
    for a fast-paced, high stress enviornment. Working as a Store Manager has
    sharpened my organization, prioritization, time management, and
    communication skills. Collaboration with district staff, managers, and
    associates has emphasized the value of team work.
  </p>
);


// MAIN COMPONENT THIS FILE RENDERS
function About() {
  return (
    <section id="about" className="backgroundColor fullscreen">
      <div className={styles.aboutContainer}>

        {/* about section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="sectionTitle">about</h1>
        </AnimationOnScroll>

        {/*<AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" offset={200}>*/}
        <div className="twoColumns">

          {/* about section image */}
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            <img
              src="https://via.placeholder.com/300x450/FFFFFF/000000?text=Stylized+Photo+Of+Scott"
              alt="Scott"
              style={{ border: "black solid 2px" }}
            />
          </AnimationOnScroll>

          {/* about section text */}
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            <div className={styles.aboutText}>{aboutMainText}</div>
          </AnimationOnScroll>
        </div>
        {/*</AnimationOnScroll>*/}
      </div>
    </section>
  );
}

export default About;
