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
    // project card with all info on project
    <div className={styles.projectCard}>
      <h2>{projectTitle}</h2>

      {/* list of tech stack used in project */}
      <div id="techButtons" className={styles.techContainer}>
        {projectTech.map((tech) => (
          <div className={styles.techButton} key={tech.toString()}>
            {tech}
          </div>
        ))}
      </div>

      {/* project description */}
      <div className={styles.projectText}>
        <p>{projectDescription}</p>
      </div>
      
      {/* links to code and hosted project */}
      <div className={styles.linkContainer}>
        <SlantedLink href={hrefSourceCode} text="source code" target="_blank"
      rel="noopener noreferrer"/>
        <SlantedLink href={hrefViewLive} text="view live" target="_blank"
      rel="noopener noreferrer"/>
      </div>
    </div>
  );
}

export default ProjectsCard;
