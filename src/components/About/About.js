// Style Imports
import styles from "./About.module.css";

const aboutMainText = (
  <>
    <p>Paragraph one of About text testing how wide this goes</p>
    <p>Paragraph two of About text</p>
    <p>Paragraph three of About text</p>
  </>
);


function About() {
    return (
      <section id="about" className="backgroundColor fullscreen">
        <div className={styles.aboutContainer}>
          <h1 className="sectionTitle  textCentered">About</h1>
          <div className="twoColumns">
            <img src="https://via.placeholder.com/300x450/1BE3E3/000000?text=Stylized+Photo+Of+Scott" alt="Scott" style={{border: "black solid 2px"}} />
            <div className={styles.aboutText}>
              {aboutMainText}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;