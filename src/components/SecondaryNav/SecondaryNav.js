// Style Imports
import styles from "./SecondaryNav.module.css";
// React Icons imports
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { IconContext } from "react-icons";

function SecondaryNav() {
  return (
    <div className={styles.secondaryNavWrapper}>
      <IconContext.Provider value={{ className: "secondaryNavIcon" }}>
        <a
          className={styles.secondaryNavLink}
          href="https://www.linkedin.com/in/scott-x-brown/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className={styles.secondaryNavLink}
          href="https://github.com/xscottxbrownx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className={styles.secondaryNavLink}
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf />
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default SecondaryNav;
