// Style Imports
import styles from "./Skills.module.css";
import "animate.css/animate.min.css";
// React Icons Imports
import { FaLaptopCode, FaTools, FaServer, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaGithubSquare, FaDiscord, FaNode} from 'react-icons/fa';
import { SiRedux, SiVisualstudiocode, SiHeroku, SiFirebase, SiPostgresql } from 'react-icons/si';
import { IconContext } from "react-icons";
// React Animate On Scroll Imports
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Skills() {
    return (

      <section id="skills" className={`backgroundColor fullscreen`}>
        <div className={styles.skillsContainer}>

        <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1.75}>
          <h1 className="sectionTitle">skills</h1>
        </AnimationOnScroll>
          <IconContext.Provider value={{className: "skillsIcons"}}>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" offset={150}>
              <div className={styles.skillsCategories}>
                <div className={styles.skillsCategory}>
                  <FaLaptopCode />  
                  <h2 style={{color: 'white', fontSize: '1.75rem'}}>Front End</h2>
                </div>
                <div className={styles.skillsIconsContainers}>
                  <div className={styles.skillsIconsContainer}>  
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaBootstrap />
                    <FaJsSquare />
                    <FaReact />
                    <SiRedux />
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" offset={150}>
              <div className={styles.skillsCategories}>
                <div className={styles.skillsCategory}>
                  <FaTools />
                  <h2 style={{color: 'white', fontSize: '1.75rem'}}>Tools</h2>
                </div>
                <div className={styles.skillsIconsContainers}>
                  <div className={styles.skillsIconsContainer}>  
                    <FaGitAlt />
                    <FaGithubSquare />
                    <SiVisualstudiocode />
                    <SiHeroku />
                    <FaDiscord />
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" offset={150}>
              <div className={styles.skillsCategories}>
                <div className={styles.skillsCategory}>
                  <FaServer />
                  <h2 style={{color: 'white', fontSize: '1.75rem'}}>Back End</h2>
                </div>
                <div className={styles.skillsIconsContainers}>
                  <div className={styles.skillsIconsContainer}>  
                    <FaNode />
                    <SiFirebase />
                    <SiPostgresql />
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