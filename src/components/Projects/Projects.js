// Style Imports
import styles from "./Projects.module.css";
// Component Imports
import ProjectsCard from "../ProjectsCard/ProjectsCard";


const project1Text = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);

const project1Tech = ["react", "redux", "bootstrap", "html"];

const project2Text = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);

const project2Tech = ["react", "bootstrap", "html"];

const project3Text = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);

const project3Tech = ["react", "bootstrap", "html"];

const project4Text = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit.
    Quis hendrerit dolor magna eget est lorem ipsum dolor.
    Enim ut sem viverra aliquet eget sit.
    Enim facilisis gravida neque convallis a.
  </p>
);

const project4Tech = ["react", "bootstrap", "html"];


function Projects() {
    return (

      <section id="projects" className="background">
        <div className={styles.projectsContainer}>

          <h1 className="sectionTitle textCentered">projects</h1>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project1+Photo(s)" 
                 alt="Project1" 
                 style={{border: "black solid 2px"}} />
            <ProjectsCard title="Project1 Title" 
                          projectText={project1Text} 
                          tech={project1Tech} />
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <ProjectsCard title="Project2 Title" 
                          projectText={project2Text} 
                          tech={project2Tech} />
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project2+Photo(s)" 
                 alt="Project2" 
                 style={{border: "black solid 2px"}} />
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>  
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project3+Photo(s)" 
                 alt="Project3" 
                 style={{border: "black solid 2px"}} />
            <ProjectsCard title="Project3 Title"
                          projectText={project3Text}
                          tech={project3Tech} />
          </div>
          
          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <ProjectsCard title="Project4 Title"
                          projectText={project4Text}
                          tech={project4Tech} />
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project4+Photo(s)" 
                alt="Project4" 
                style={{border: "black solid 2px"}} />
          </div>

        </div>
      </section>

    );
  }
  
  export default Projects;