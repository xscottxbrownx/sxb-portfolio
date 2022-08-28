// Style Imports
import styles from "./Projects.module.css";
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

          <h1 className="sectionTitle textCentered">projects</h1>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project1+Photo(s)" 
                 alt="Project1" 
                 style={{border: "black solid 2px"}} />
            <ProjectsCard projectTitle="Project1 Title" 
                          projectTech={["react", "redux", "bootstrap", "google API"]}
                          projectDescription={project1Description} />
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <ProjectsCard projectTitle="Project2 Title" 
                          projectTech={["react", "bootstrap", "html"]}
                          projectDescription={project2Description} />
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project2+Photo(s)" 
                 alt="Project2" 
                 style={{border: "black solid 2px"}} />
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>  
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project3+Photo(s)" 
                 alt="Project3" 
                 style={{border: "black solid 2px"}} />
            <ProjectsCard projectTitle="Project3 Title"
                          projectTech={["react", "bootstrap", "html"]}
                          projectDescription={project3Description} />
          </div>
          
          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <ProjectsCard projectTitle="Project4 Title"
                          projectTech={["react", "bootstrap", "html"]}
                          projectDescription={project4Description} />
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project4+Photo(s)" 
                alt="Project4" 
                style={{border: "black solid 2px"}} />
          </div>

        </div>
      </section>

    );
  }
  
  export default Projects;