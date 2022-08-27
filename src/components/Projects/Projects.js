// Style Imports
import styles from "./Projects.module.css";
// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";


const projectTextSample = (
  <>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit. Quis hendrerit dolor magna eget est lorem ipsum dolor. Enim ut sem viverra aliquet eget sit. Enim facilisis gravida neque convallis a.
    </p>
  </>
);

function Projects() {
    return (

      <section id="projects" className="background">
        <div className={styles.projectsContainer}>

          <h1 className="sectionTitle textCentered">projects</h1>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project1+Photo(s)" alt="Project1" style={{border: "black solid 2px"}} />
            <div className={styles.projectText}>
              <h2>Project1 Title</h2>
              <div className={styles.techContainer}>
                <button className={styles.techButton}>react</button>
                <button className={styles.techButton}>redux</button>
                <button className={styles.techButton}>bootstrap</button>
                <button className={styles.techButton}>html</button>
              </div>
              {projectTextSample}
              <div className={styles.linkContainer}>
                <SlantedLink href="/" text="source code" />
                <SlantedLink href="/" text="view live" />
              </div>
            </div>
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <div className={styles.projectText}>
              <h2>Project2 Title</h2>
              <div className={styles.techContainer}>
                <button className={styles.techButton}>react</button>
                <button className={styles.techButton}>bootstrap</button>
                <button className={styles.techButton}>html</button>
              </div>
              <div>
              {projectTextSample}
              </div>
              <div className={styles.linkContainer}>
                <SlantedLink href="/" text="source code" />
                <SlantedLink href="/" text="view live" />
              </div>
            </div>
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project2+Photo(s)" alt="Project2" style={{border: "black solid 2px"}} />
          </div>

          <div className={`twoColumns ${styles.projectMarginBottom}`}>  
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project3+Photo(s)" alt="Project3" style={{border: "black solid 2px"}} />
            <div className={styles.projectText}>
              <h2>Project3 Title</h2>
              <div className={styles.techContainer}>
                <button className={styles.techButton}>react</button>
                <button className={styles.techButton}>redux</button>
                <button className={styles.techButton}>html</button>
                <button className={styles.techButton}>google maps API</button>
              </div>
              {projectTextSample}
              <div className={styles.linkContainer}>
                <SlantedLink href="/" text="source code" />
                <SlantedLink href="/" text="view live" />
              </div>
            </div>
          </div>
          
          <div className={`twoColumns ${styles.projectMarginBottom}`}>
            <div className={styles.projectText}>
              <h2>Project4 Title</h2>
              <div className={styles.techContainer}>
                <button className={styles.techButton}>react</button>
                <button className={styles.techButton}>redux</button>
                <button className={styles.techButton}>html</button>
                <button className={styles.techButton}>currency.js</button>
                <button className={styles.techButton}>firebase</button>
              </div>
              {projectTextSample}
              <div className={styles.linkContainer}>
                <SlantedLink href="/" text="source code" />
                <SlantedLink href="/" text="view live" />
              </div>
            </div>
            <img src="https://via.placeholder.com/300x300/1BE3E3/000000?text=Project4+Photo(s)" alt="Project4" style={{border: "black solid 2px"}} />
          </div>

        </div>
      </section>

    );
  }
  
  export default Projects;