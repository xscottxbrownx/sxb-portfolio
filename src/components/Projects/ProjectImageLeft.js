// Imports from React
import { useEffect, useRef } from "react";
// Imports from React Animate On Scroll
import { AnimationOnScroll } from "react-animation-on-scroll";
// Imported Components
import ProjectsCard from "./ProjectsCard/ProjectsCard";

export default function ProjectImageLeft({ project, mobileView }) {
  const {
    title,
    tech,
    description,
    imageLink,
    imageAlt,
    imageStyle,
    hrefSourceCode,
    hrefViewLive,
    wip = false,
  } = project;

  const animationTriggered = useRef(false);

  useEffect(() => {
    if (!animationTriggered.current) {
      animationTriggered.current = true;
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full my-12 lg:my-20 lg:flex-row lg:justify-between lg:items-center">
      {/* project image */}
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOnce
        offset={mobileView ? 150 : 300}
        duration={0.6}
        className="mb-4 lg:mb-0 lg:mx-6"
        initiallyVisible={animationTriggered.current}
      >
        <img src={imageLink} alt={imageAlt} style={imageStyle} />
      </AnimationOnScroll>

      {/* project description */}
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        animateOnce
        offset={mobileView ? 150 : 300}
        duration={0.6}
        className="lg:w-3/5 lg:mx-6"
        initiallyVisible={animationTriggered.current}
      >
        <ProjectsCard
          projectTitle={title}
          projectTech={tech}
          projectDescription={description}
          hrefSourceCode={hrefSourceCode}
          hrefViewLive={hrefViewLive}
          wip={wip}
        />
      </AnimationOnScroll>
    </div>
  );
}
