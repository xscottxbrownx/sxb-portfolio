// React Imports
import { useRef } from "react";
// Style Imports
import styles from "./Contact.module.css";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// React Icons Imports
import { FaFilePdf, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
// EmailJS Imports
import emailjs from "@emailjs/browser";
// Custom Component Imports
import Resume from "../../assets/Scott_Brown_Resume.pdf";



export default function Contact({showModal, setShowModal}) {

  const form = useRef();
  const toggleModal = () => setShowModal((showModal) => !showModal);

  
  // handle SEND button
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
          console.error(error.text);
        }
      );
    toggleModal(showModal);
    e.target.reset();
  };



  return (
    <section id="contact" className="pb-20">
      <div className="flex flex-col items-center justify-center mx-[10%] lg:mx-[21%]">
        {/* contact section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="uppercase p-20 text-4xl lg:text-5xl font-bold">contact</h1>
        </AnimationOnScroll>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            {/* social media icon links */}
            <div className="hidden xs:flex lg:flex-col items-center justify-center mb-12">
              <IconContext.Provider value={{ className: "h-6 w-6 lg:h-14 lg:w-14 lg:p-2" }}>
                {/* Resume */}
                <a
                  className="flex items-center justify-center mx-1 lg:p-4 hover:text-accent2"
                  href={`${Resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">Resume</h2>
                </a>


                {/* LinkedIn */}
                <a
                  className="flex items-center justify-center mx-1 lg:p-4 hover:text-accent2"
                  href="https://www.linkedin.com/in/scott-x-brown/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">LinkedIn</h2>
                </a>

                {/* Github */}
                <a
                  className="flex items-center justify-center mx-1 lg:p-4 hover:text-accent2"
                  href="https://github.com/xscottxbrownx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">Github</h2>
                </a>

                {/* Email */}
                <a
                  className="flex items-center justify-center mx-1 lg:p-4 hover:text-accent2"
                  href="mailto:hello@scottxbrown.com?subject=Contacting%20via%20scottxbrown.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">Email</h2>
                </a>
              </IconContext.Provider>
            </div>
          </AnimationOnScroll>

          {/* contact form */}
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            <form
              className="flex flex-col items-center lg:p-6"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-60 lg:w-96 mb-4 p-2 border border-black rounded font-sans outline-none focus:placeholder:text-black"
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-60 lg:w-96 mb-4 p-2 border border-black rounded font-sans outline-none focus:placeholder:text-black"
              ></input>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-60 lg:w-96 mb-4 p-2 border border-black rounded font-sans outline-none focus:placeholder:text-black"
              ></textarea>

              {/* bg-gradient-to-br from-mainFrom from-48% to-mainTo to-100%
              hover:bg-gradient-to-br from-mainFrom from-48% to-mainTo to-100% */}

              <button
                type="submit"
                className={`py-[.20rem] lg:py-[.40rem] px-2 lg:px-4 flex font-bold -skew-x-[38deg] bg-main bg-clip-text text-transparent border-2 group ${styles.contactButton}`}
              >
                <span
                  className={`uppercase text-xl font-semibold skew-x-[38deg] bg-main bg-clip-text text-transparent group-hover:text-white ${styles.contactButtonContent}`}
                >
                  send
                </span>
              </button>
            </form>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}