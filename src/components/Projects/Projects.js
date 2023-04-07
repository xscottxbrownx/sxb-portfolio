// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// Component Imports
import ProjectImageLeft from "./ProjectImageLeft";
import ProjectImageRight from "./ProjectImageRight";
// Data Imports
import projects from "../../data/ProjectsList.js";



export default function Projects() {
  return (
    <section id="projects" className="pb-20">
      <div className="flex-col items-center justify-center mx-[21%]">

        {/* project section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="uppercase p-20 text-5xl text-center font-bold">projects</h1>
        </AnimationOnScroll>

        {/* list of projects alternating directions */}
        {projects.map((project, index) => {
          const isLeftImage = index % 2 === 0;
          return isLeftImage
            ? (
              <ProjectImageLeft
                key={index}
                project={project}
              />
            )
            : (
              <ProjectImageRight
                key={index}
                project={project}
              />
            );
        })}
      </div>
    </section>
  );
}