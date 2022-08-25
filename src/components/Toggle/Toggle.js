// Style Imports
import styles from "./Toggle.module.css";
// React Icons Imports
import { FaSun, FaMoon } from 'react-icons/fa';
import { IconContext } from "react-icons";


function Toggle() {
    return (
      <div className={styles.toggleContainer}>
        <IconContext.Provider value={{ className: "toggleIcons" }}>
          <button className={styles.iconContainer}>
              <FaSun /><FaMoon />
          </button>
        </IconContext.Provider>
      </div>
    );
  }
  
  export default Toggle;