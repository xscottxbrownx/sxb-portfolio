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
} from "react-icons/si";
import { IconContext } from "react-icons";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";


export default function Skills() {

  return (
    <section id="skills" className="bg-main pb-20 h-screen">
      <div className="flex flex-col mx-[21%]">
        {/* skills section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="uppercase p-20 text-5xl text-center font-bold">skills</h1>
        </AnimationOnScroll>

        <IconContext.Provider value={{ className: "h-12 w-12 m-4" }}>
          {/* front end */}
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            offset={150}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-center m-8">
                <FaLaptopCode />
                <h2 className="text-white text-3xl">Front End</h2>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-wrap m-8">
                  <div className="flex flex-col items-center justify-center">
                    <FaHtml5 />
                    <p>HTML</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <FaCss3Alt />
                    <p>CSS</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <FaBootstrap />
                    <p>Boostrap</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <FaJsSquare />
                    <p>Javascript</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <FaReact />
                    <p>React</p>
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
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-center m-8">
                <FaTools />
                <h2 className="text-white text-3xl">Tools</h2>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-wrap m-8">
                  <div className="flex flex-col items-center justify-center">
                    <FaGitAlt />
                    <p>GIT</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <FaGithubSquare />
                    <p>Github</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <SiVisualstudiocode />
                    <p>VScode</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
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