// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// Imported Assets
import ScottPhoto from "../../assets/Scott.webp"


// ABOUT ME TEXT - make any changes here
const aboutMainText = (
  <p>
    My time has been dedicated to learning as much as I can about web
    developement, while owning and running{" "}
    <a
      href="https://www.birdmafia.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="font-bold">bird mafia</span>
    </a>{" "}
    with my wife. My 19 year career in big box retail management has prepared me
    for a fast-paced, high stress enviornment. Working as a Store Manager has
    sharpened my organization, prioritization, time management, and
    communication skills. Collaboration with district staff, managers, and
    associates has emphasized the value of team work. I have been gaining
    experience in this field and am ready to contribute to a meaningful team.
  </p>
);



// MAIN COMPONENT THIS FILE RENDERS
export default function About() {

  return (
    <section id="about" className="bg-main pb-20 h-full">
      <div className="flex flex-col items-center justify-center mx-[10%] lg:mx-[21%]">
        {/* about section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="uppercase p-20 text-4xl lg:text-5xl font-bold">about</h1>
        </AnimationOnScroll>

        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          {/* about section image */}
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
            className="mb-4 lg:mb-0"
          >
            <img
              src={ScottPhoto}
              alt="Scott"
              className="border-black border-solid border-2 w-[250px] h-[275px] lg:w-[300px] lg:h-[450px]"
            />
          </AnimationOnScroll>

          {/* about section text */}
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            offset={150}
            duration={0.6}
            className="items-center text-center leading-8 lg:m-12 lg:w-3/5"
          >
            {aboutMainText}
          </AnimationOnScroll>
        </div>
        {/*</AnimationOnScroll>*/}
      </div>
    </section>
  );
}