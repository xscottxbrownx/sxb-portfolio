// Style Imports
import styles from "./About.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from 'react-animation-on-scroll';

const aboutMainText = (
  <>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Orci eu lobortis elementum nibh tellus molestie nunc non. Ut consequat semper viverra nam libero justo laoreet sit. Quis hendrerit dolor magna eget est lorem ipsum dolor. Enim ut sem viverra aliquet eget sit. Enim facilisis gravida neque convallis a.
    </p>
  </>
);


function About() {
    return (

      <section id="about" className="backgroundColor fullscreen">
        <div className={styles.aboutContainer}>

          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1.75}>
            <h1 className="sectionTitle">about</h1>
          </AnimationOnScroll>
         
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" offset={200}>
          <div className="twoColumns">

            <img src="https://via.placeholder.com/300x450/FFFFFF/000000?text=Stylized+Photo+Of+Scott" alt="Scott" style={{border: "black solid 2px"}} />
            <div className={styles.aboutText}>
              {aboutMainText}
            </div>
            
          </div>
          </AnimationOnScroll>

        </div>
      </section>

    );
  }
  
  export default About;