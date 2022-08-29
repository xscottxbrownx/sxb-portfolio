// Style Imports
import styles from "./Intro.module.css";
import 'animate.css';
// Component Imports
import PrimaryNav from "../PrimaryNav/PrimaryNav.js";


function Intro() {
    return (

      <div className="centered fullscreen oneColumn">

        <header>
          <h1 className={`${styles.doubleTextSize} ${styles.introFirstLine} animate__animated animate__fadeIn`}>Hi, I'm <span className={styles.introName}>Scott</span>.</h1>
          <h1 className={`${styles.doubleTextSize} ${styles.introSecondLine} animate__animated animate__fadeIn`}>I'm a front end developer.</h1>
          <div>
            {/* Animate this to fade in and come from left, but AFTER the main text */}
            {/*<PrimaryNav />*/}
          </div>
        </header>
        
      </div>
    );
  }
  
  export default Intro;