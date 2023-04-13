// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// Custom Component Imports
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";



export default function Contact({showModal, setShowModal}) {

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
          {/* social media icon links */}
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            <ContactLinks />
          </AnimationOnScroll>
          {/* contact form */}
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
          >
            <ContactForm />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}