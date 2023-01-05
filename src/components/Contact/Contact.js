// React Imports
import { useRef, useState } from "react";
// Style Imports
import styles from "./Contact.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// React Icons Imports
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
// EmailJS Imports
import emailjs from "@emailjs/browser";
// Custom Component Imports
import Modal from "./Modal";

function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sal06dm",
        "template_9ncakv3",
        form.current,
        "IBCPvo5z_s92Qao1v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toggleModal();
    e.target.reset();
  };

  return (
    <section id="contact" className="background">
      <div className={styles.contactContainer}>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="sectionTitle">contact</h1>
        </AnimationOnScroll>

        <div className={styles.columns}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            <div className={styles.contactSocialsContainer}>
              <IconContext.Provider value={{ className: "contactNavIcon" }}>
                <a
                  className={styles.contactSocialsLink}
                  href="https://www.linkedin.com/in/scott-x-brown/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <h2 className={styles.contactSocialsLinkText}>LinkedIn</h2>
                </a>
                <a
                  className={styles.contactSocialsLink}
                  href="https://github.com/xscottxbrownx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <h2 className={styles.contactSocialsLinkText}>Github</h2>
                </a>
                <a
                  className={styles.contactSocialsLink}
                  href="mailto:hello@scottxbrown.com?subject=Contacting%20via%20scottxbrown.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                  <h2 className={styles.contactSocialsLinkText}>Email</h2>
                </a>
              </IconContext.Provider>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            <form
              className={styles.contactForm}
              ref={form}
              onSubmit={sendEmail}
            >
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
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}

export default Contact;
