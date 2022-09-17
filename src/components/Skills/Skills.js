// Style Imports
import styles from "./Skills.module.css";
import "animate.css/animate.min.css";
// React Icons Imports
import {
  FaLaptopCode,
  FaTools,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithubSquare,
  FaDiscord,
  FaNode,
} from "react-icons/fa";
import {
  SiRedux,
  SiVisualstudiocode,
  SiHeroku,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";
import { IconContext } from "react-icons";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";

function Skills() {
  return (
    <section id="skills" className={`backgroundColor fullscreen`}>
      <div className={styles.skillsSectionContainer}>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="sectionTitle textCentered">skills</h1>
        </AnimationOnScroll>

        <IconContext.Provider value={{ className: "skillsIcon" }}>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            offset={150}
          >
            <div className={styles.skillsCategoryContainer}>
              <div className={styles.skillsCategoryTitle}>
                <FaLaptopCode />
                <h2 className={styles.skillsCategoryTitleText}>Front End</h2>
              </div>
              <div className={styles.skillsIconsContainer}>
                <div className={styles.skillsIcons}>
                  <div className="centered">
                    <FaHtml5 />
                    <p>HTML</p>
                  </div>
                  <div className="centered">
                    <FaCss3Alt />
                    <p>CSS</p>
                  </div>
                  <div className="centered">
                    <FaBootstrap />
                    <p>Boostrap</p>
                  </div>
                  <div className="centered">
                    <FaJsSquare />
                    <p>Javascript</p>
                  </div>
                  <div className="centered">
                    <FaReact />
                    <p>React</p>
                  </div>
                  <div className="centered">
                    <SiRedux />
                    <p>Redux</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            offset={150}
          >
            <div className={styles.skillsCategoryContainer}>
              <div className={styles.skillsCategoryTitle}>
                <FaTools />
                <h2 className={styles.skillsCategoryTitleText}>Tools</h2>
              </div>
              <div className={styles.skillsIconsContainer}>
                <div className={styles.skillsIcons}>
                  <div className="centered">
                    <FaGitAlt />
                    <p>GIT</p>
                  </div>
                  <div className="centered">
                    <FaGithubSquare />
                    <p>Github</p>
                  </div>
                  <div className="centered">
                    <SiVisualstudiocode />
                    <p>VScode</p>
                  </div>
                  <div className="centered">
                    <SiHeroku />
                    <p>Heroku</p>
                  </div>
                  <div className="centered">
                    <FaDiscord />
                    <p>Discord</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            offset={150}
          >
            <div className={styles.skillsCategoryContainer}>
              <div className={styles.skillsCategoryTitle}>
                <FaServer />
                <h2 className={styles.skillsCategoryTitleText}>Back End</h2>
              </div>
              <div className={styles.skillsIconsContainer}>
                <div className={styles.skillsIcons}>
                  <div className="centered">
                    <FaNode />
                    <p>Node.js</p>
                  </div>
                  <div className="centered">
                    <SiFirebase />
                    <p>Firebase</p>
                  </div>
                  <div className="centered">
                    <SiPostgresql />
                    <p>Postgres</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </IconContext.Provider>
      </div>
    </section>
  );
}

export default Skills;
