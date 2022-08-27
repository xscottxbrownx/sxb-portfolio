// Style Imports
import styles from "./ProjectsCard.module.css";
// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";


function ProjectsCard({ title, projectText }) {
    return (

        <div className={styles.projectCard}>
            <h2>{title}</h2>
            <div className={styles.techContainer}>
                <button className={styles.techButton}>react</button>
                <button className={styles.techButton}>redux</button>
                <button className={styles.techButton}>bootstrap</button>
                <button className={styles.techButton}>html</button>
            </div>
            <div className={styles.projectText}>
                {projectText}
            </div>
            <div className={styles.linkContainer}>
                <SlantedLink href="/" text="source code" />
                <SlantedLink href="/" text="view live" />
            </div>
        </div>

    );
  }
  
  export default ProjectsCard;