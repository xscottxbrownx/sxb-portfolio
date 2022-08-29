// Style Imports
import styles from "./Projects.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Component Imports
import ProjectsCard from "../ProjectsCard/ProjectsCard";


const project1Description = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);

const project2Description = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);

const project3Description = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);

const project4Description = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);


function Projects() {
    return (

      <section id="projects" className="background">
        <div className={styles.projectsContainer}>

          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1.75}>
            <h1 className="sectionTitle textCentered">projects</h1>
          </AnimationOnScroll>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOut" offset={300}>
              <div >
                <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project1+Photo(s)" 
                    alt="Project1" 
                    style={{border: "black solid 2px"}} />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOut" offset={300}>
              <div>
                <ProjectsCard projectTitle="Project1 Title" 
                              projectTech={["react", "redux", "bootstrap", "google API"]}
                              projectDescription={project1Description} />
              </div>
            </AnimationOnScroll>
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOut" offset={300}>
              <div>
                <ProjectsCard projectTitle="Project2 Title" 
                              projectTech={["react", "bootstrap", "html"]}
                              projectDescription={project2Description} />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOut" offset={300}>
              <div>
                <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project2+Photo(s)" 
                    alt="Project2" 
                    style={{border: "black solid 2px"}} />
              </div>
            </AnimationOnScroll>
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOut" offset={300}>
              <div>  
                <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project3+Photo(s)" 
                    alt="Project3" 
                    style={{border: "black solid 2px"}} />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOut" offset={300}>
              <div>
                <ProjectsCard projectTitle="Project3 Title"
                              projectTech={["react", "bootstrap", "html"]}
                              projectDescription={project3Description} />
              </div>
            </AnimationOnScroll>
          </div>
          
          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOut" offset={300}>
              <div>
                <ProjectsCard projectTitle="Project4 Title"
                              projectTech={["react", "bootstrap", "html"]}
                              projectDescription={project4Description} />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOut" offset={300}>
              <div>
              <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project4+Photo(s)" 
                  alt="Project4" 
                  style={{border: "black solid 2px"}} />
              </div>
            </AnimationOnScroll>
          </div>

        </div>
      </section>

    );
  }
  
  export default Projects;