// Style Imports
import styles from "./PrimaryNav.module.css";
// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";


function PrimaryNav() {
  return (
    <nav className={styles.primaryNavWrapper}>
      <SlantedLink href="#skills" text="skills" />
      <SlantedLink href="#projects" text="projects" />
      <SlantedLink href="#about" text="about" />
      <SlantedLink href="#contact" text="contact" />
    </nav>
  );
}

export default PrimaryNav;
