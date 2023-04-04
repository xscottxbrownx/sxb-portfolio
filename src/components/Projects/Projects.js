// Style Imports
import styles from "./Projects.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// Component Imports
import ProjectsCard from "../ProjectsCard/ProjectsCard";
// Data Imports
import projects from "../../data/ProjectsList.js";


// can refactor with a .map - just need to alternate every other one
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

        <div className={`twoColumns ${styles.projectMarginBottom}`}>
          {/* first project image */}
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
          {/* first project description */}
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
                hrefSourceCode={projects[0].hrefSourceCode}
                hrefViewLive={projects[0].hrefViewLive}
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className={`twoColumns ${styles.projectMarginBottom}`}>
          {/* second project description */}
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
                hrefSourceCode={projects[1].hrefSourceCode}
                hrefViewLive={projects[1].hrefViewLive}
              />
            </div>
          </AnimationOnScroll>
          {/* second project image */}
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
          {/* third project image */}
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
          {/* third project description */}
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
                hrefSourceCode={projects[2].hrefSourceCode}
                hrefViewLive={projects[2].hrefViewLive}
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className={`twoColumns ${styles.projectMarginBottom}`}>
          {/* fourth project description */}
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
                hrefSourceCode={projects[3].hrefSourceCode}
                hrefViewLive={projects[3].hrefViewLive}
              />
            </div>
          </AnimationOnScroll>
          {/* fourth project image */}
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