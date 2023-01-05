// Style Imports
import styles from "./ProjectsCard.module.css";
// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";

function ProjectsCard({
  projectTitle,
  projectTech,
  projectDescription,
  hrefSourceCode,
  hrefViewLive,
}) {
  return (
    <div className={styles.projectCard}>
      <h2>{projectTitle}</h2>
      <div id="techButtons" className={styles.techContainer}>
        {projectTech.map((tech) => (
          <div className={styles.techButton} key={tech.toString()}>
            {tech}
          </div>
        ))}
      </div>
      <div className={styles.projectText}>
        <p>{projectDescription}</p>
      </div>
      <div className={styles.linkContainer}>
        <SlantedLink href={hrefSourceCode} text="source code" />
        <SlantedLink href={hrefViewLive} text="view live" />
      </div>
    </div>
  );
}

export default ProjectsCard;
