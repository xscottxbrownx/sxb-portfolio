// Style Imports
import "animate.css/animate.min.css";
// React Icons Imports
import {
  FaLaptopCode,
  FaTools,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithubSquare,
  FaDiscord,
  FaNode,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiFirebase,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { IconContext } from "react-icons";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";


export default function Skills() {

  return (
    <section id="skills" className="bg-main pb-20 lg:h-screen">
      <div className="flex flex-col mx-[5%] lg:mx-[21%]">
        {/* skills section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="uppercase p-20 text-4xl lg:text-5xl text-center font-bold">skills</h1>
        </AnimationOnScroll>

        <IconContext.Provider value={{ className: "h-12 w-12 m-2 lg:m-4" }}>
          {/* front end */}
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            offset={150}
          >
            <div className="flex flex-col lg:flex-row w-full items-center justify-between lg:my-8">
              <div className="flex items-center justify-center">
                <FaLaptopCode className="hidden lg:block"/>
                <h2 className="text-white text-3xl">Front&nbsp;End</h2>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-wrap lg:flex-nowrap">
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaReact />
                    <p>React</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaJsSquare />
                    <p>Javascript</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <SiTailwindcss />
                    <p>Tailwind</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaBootstrap />
                    <p>Boostrap</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaCss3Alt />
                    <p>CSS</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaHtml5 />
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>

          {/* tools */}
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            offset={150}
          >
            <div className="flex flex-col lg:flex-row w-full items-center justify-between my-8">
              <div className="flex items-center justify-center">
                <FaTools className="hidden lg:block"/>
                <h2 className="text-white text-3xl">Tools</h2>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-wrap">
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaGitAlt />
                    <p>GIT</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaGithubSquare />
                    <p>Github</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <SiVisualstudiocode />
                    <p>VScode</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mx-1">
                    <FaDiscord />
                    <p>Discord</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>

          {/* back end */}
          {/* <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            offset={150}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-center m-8">
                <FaServer />
                <h2 className="text-white text-3xl">Back End</h2>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-wrap m-8">
                  <div className="flex flex-col items-center justify-center">
                    <FaNode />
                    <p>Node.js</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <SiFirebase />
                    <p>Firebase</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <SiPostgresql />
                    <p>Postgres</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll> */}
        </IconContext.Provider>
      </div>
    </section>
  );
}

// className: "h-8 w-8 m-2 lg:h-12 lg:w-12 lg:m-4"