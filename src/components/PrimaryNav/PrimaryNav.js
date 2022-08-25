// Style Imports
import styles from "./PrimaryNav.module.css";


function PrimaryNav() {
    return (
        <nav className={styles.primaryNavWrapper}>
            <a className={styles.primaryNavLink} href="#skills">Skills</a>
            <a className={styles.primaryNavLink} href="#projects">Projects</a>
            <a className={styles.primaryNavLink} href="#about">About</a>
            <a className={styles.primaryNavLink} href="#contact">Contact</a>
        </nav>
    );
}

export default PrimaryNav;