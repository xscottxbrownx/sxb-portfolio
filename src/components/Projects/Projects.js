// React Imports
import { useEffect, useState } from "react";
// React Animate On Scroll Imports
import { AnimationOnScroll } from "react-animation-on-scroll";
// Component Imports
import ProjectImageLeft from "./ProjectImageLeft";
import ProjectImageRight from "./ProjectImageRight";
// Data Imports
import projects from "../../data/ProjectsList.js";

export default function Projects() {
  // breakpoint to determine when to stack images on top of text
  const [mobileView, setMobileView] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    // update the state when the window is resized
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // create the list of projects
  // image alternates sides on tablet and above
  const renderedProjects = projects.map((project, index) => {
    const isLeftImage = index % 2 === 0;

    return mobileView || isLeftImage ? (
      <ProjectImageLeft key={index} project={project} mobileView={mobileView} />
    ) : (
      <ProjectImageRight
        key={index}
        project={project}
        mobileView={mobileView}
      />
    );
  });

  return (
    <section id="projects" className="pb-20">
      <div className="flex flex-col items-center justify-center mx-[5%] lg:mx-[21%]">
        {/* project section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce
          duration={1.75}
        >
          <h1 className="uppercase p-20 text-4xl lg:text-5xl font-bold">
            projects
          </h1>
        </AnimationOnScroll>

        {/* list of projects */}
        {renderedProjects}
      </div>
    </section>
  );
}
