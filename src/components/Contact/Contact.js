// Style Imports
import styles from "./Contact.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";

function Contact() {
  return (
    <section id="contact" className="background textCentered">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        duration={1.75}
      >
        <h1 className="sectionTitle">contact</h1>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        offset={200}
      >
        <form className={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={styles.contactFormInput}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={styles.contactFormInput}
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            rows="8"
            required
            className={styles.contactFormInput}
          ></textarea>

          <button type="submit" className={styles.contactButton}>
            <span className={styles.contactButtonContent}>send</span>
            {/*<IconContext.Provider value={{className: "contactButtonIcon"}}>
                <FaPaperPlane />
              </IconContext.Provider>*/}
          </button>
        </form>
      </AnimationOnScroll>
    </section>
  );
}

export default Contact;
