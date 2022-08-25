// Style Imports
import styles from "./Skills.module.css";
// React Icons imports
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaGithubSquare, FaDiscord, FaNode} from 'react-icons/fa';
import { SiRedux, SiVisualstudiocode, SiHeroku, SiFirebase, SiPostgresql } from 'react-icons/si';
import { IconContext } from "react-icons";


function Skills() {
    return (
      <section id="skills" className={`backgroundColor textCentered fullscreen`}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsCard}>
            <h2 style={{color: 'white'}}>Front End</h2>
            <div className={styles.skillsIconsContainer}>
              <IconContext.Provider value={{className: "skillsIcons"}}>
                <FaHtml5 />
                <FaCss3Alt />
                <FaBootstrap />
                <FaJsSquare />
                <FaReact />
                <SiRedux />
              </IconContext.Provider>
            </div>
          </div>
          <div className={styles.skillsCard}>
            <h2 style={{color: 'white'}}>Tools</h2>
            <div className={styles.skillsIconsContainer}>
              <IconContext.Provider value={{className: "skillsIcons"}}>
                <FaGitAlt />
                <FaGithubSquare />
                <SiVisualstudiocode />
                <SiHeroku />
                <FaDiscord />
              </IconContext.Provider>
            </div>
          </div>
          <div className={styles.skillsCard}>
            <h2 style={{color: 'white'}}>Back End</h2>
            <div className={styles.skillsIconsContainer}>
              <IconContext.Provider value={{className: "skillsIcons"}}>
                <FaNode />
                <SiFirebase />
                <SiPostgresql />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;