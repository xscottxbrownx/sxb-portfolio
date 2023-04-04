// Style Imports
import styles from "./Projects.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// Component Imports
import ProjectImageLeft from "./ProjectImageLeft";
import ProjectImageRight from "./ProjectImageRight";
// Data Imports
import projects from "../../data/ProjectsList.js";



export default function Projects() {
  return (
    <section id="projects" className="background">
      <div className={styles.projectsSectionContainer}>

        {/* project section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="sectionTitle textCentered">projects</h1>
        </AnimationOnScroll>

        {/* list of projects alternating directions */}
        {projects.map((project, index) => {
          const isLeftImage = index % 2 === 0;
          return isLeftImage
            ? (
              <ProjectImageLeft
                key={index}
                project={project}
              />
            )
            : (
              <ProjectImageRight
                key={index}
                project={project}
              />
            );
        })}
      </div>
    </section>
  );
}