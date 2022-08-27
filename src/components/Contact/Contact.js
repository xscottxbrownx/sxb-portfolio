// Style Imports
import styles from "./Contact.module.css";
// React Icons Imports
import { FaPaperPlane } from 'react-icons/fa';
import { IconContext } from "react-icons";


function Contact() {
    return (

      <section id="contact" className="background textCentered">

        <h1 className="sectionTitle">contact</h1>

        <form className={styles.contactForm}>
          <input type="text" name="name" placeholder="Name" required className={styles.contactFormInput}></input>
          <input type="email" name="email" placeholder="Email" required className={styles.contactFormInput}></input>
          <textarea name="message" placeholder="Message" rows="8" required className={styles.contactFormInput}></textarea>

          <button type="submit" className={styles.contactButton}>
            <span className={styles.contactButtonText}>send</span>
            <IconContext.Provider value={{className: "contactButtonIcon"}}>
              <FaPaperPlane />
            </IconContext.Provider>
          </button>
          
        </form>

      </section>

    );
  }
  
  export default Contact;