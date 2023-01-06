// Style Imports
import styles from "./SecondaryNav.module.css";
// React Icons imports
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { IconContext } from "react-icons";
import Resume from "../../assets/Scott_Brown_Resume.pdf";


function SecondaryNav() {
  return (
    <div className={styles.secondaryNavWrapper}>
      <IconContext.Provider value={{ className: "secondaryNavIcon" }}>
        {/* LinkedIn */}
        <a
          className={styles.secondaryNavLink}
          href="https://www.linkedin.com/in/scott-x-brown/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* Github */}
        <a
          className={styles.secondaryNavLink}
          href="https://github.com/xscottxbrownx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* Resume PDF */}
        <a
          className={styles.secondaryNavLink}
          href={`${Resume}`}
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
