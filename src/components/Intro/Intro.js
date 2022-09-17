// Style Imports
import styles from "./Intro.module.css";
import "animate.css";


//set cookie to only play animation every 2 days?  So it doesn't get replayed on reload of page

function Intro() {
  return (
    <div className="centered fullscreen oneColumn">
      <header>
        <h1
          className={`${styles.introTextSize} ${styles.introFirstLine} animate__animated animate__fadeIn`}
        >
          Hi, I'm <span className={styles.introName}>Scott</span>.
        </h1>
        <h1
          className={`${styles.introTextSize} ${styles.introSecondLine} animate__animated animate__fadeIn`}
        >
          I'm a front end developer.
        </h1>
      </header>
    </div>
  );
}

export default Intro;
