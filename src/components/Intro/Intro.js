// Style Imports
import styles from "./Intro.module.css";
// Component Imports
import PrimaryNav from "../PrimaryNav/PrimaryNav.js";


function Intro() {
    return (
      <div className="centered fullscreen">
        <header>
          {/* Animate this to fade in and come from left */}
          <h1 className={styles.doubleTextSize}>Hi, I'm <span className="mainColor">Scott</span>.<br/>I'm a front end developer.</h1>
          <div>
            {/* Animate this to fade in and come from left, but AFTER the main text */}
            <PrimaryNav />
          </div>
        </header>
      </div>
    );
  }
  
  export default Intro;