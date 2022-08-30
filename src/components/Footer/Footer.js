// Style Imports
import styles from "./Footer.module.css";
// React Icons Imports
import { FaArrowCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#top" className={styles.footerLink}>
        <div className={styles.footerLinkContainer}>
          <IconContext.Provider value={{ className: "footerArrowIcon" }}>
            <FaArrowCircleUp />
          </IconContext.Provider>
        </div>
        <p>back to top</p>
      </a>
    </footer>
  );
}

export default Footer;
