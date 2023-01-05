// Style Imports
import styles from "./Projects.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// Component Imports
import ProjectsCard from "../ProjectsCard/ProjectsCard";
// Data Imports
import projects from "../../data/ProjectsList.js";

function Projects() {
  return (
    <section id="projects" className="background">
      <div className={styles.projectsSectionContainer}>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="sectionTitle textCentered">projects</h1>
        </AnimationOnScroll>

        <div className={`twoColumns ${styles.projectMarginBottom}`}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <img
                src={projects[0].imageLink}
                alt={projects[0].imageAlt}
                style={projects[0].imageStyle}
              />
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <ProjectsCard
                projectTitle={projects[0].title}
                projectTech={projects[0].tech}
                projectDescription={projects[0].description}
                href={projects[0].href}
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className={`twoColumns ${styles.projectMarginBottom}`}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <ProjectsCard
                projectTitle={projects[1].title}
                projectTech={projects[1].tech}
                projectDescription={projects[1].description}
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <img
                src={projects[1].imageLink}
                alt={projects[1].imageAlt}
                style={projects[1].imageStyle}
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className={`twoColumns ${styles.projectMarginBottom}`}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <img
                src={projects[2].imageLink}
                alt={projects[2].imageAlt}
                style={projects[2].imageStyle}
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <ProjectsCard
                projectTitle={projects[2].title}
                projectTech={projects[2].tech}
                projectDescription={projects[2].description}
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className={`twoColumns ${styles.projectMarginBottom}`}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <ProjectsCard
                projectTitle={projects[3].title}
                projectTech={projects[3].tech}
                projectDescription={projects[3].description}
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={300}
            duration={0.6}
          >
            <div>
              <img
                src={projects[3].imageLink}
                alt={projects[3].imageAlt}
                style={projects[3].imageStyle}
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Projects;
