// Imports from React Animate On Scroll
import { AnimationOnScroll } from "react-animation-on-scroll";
// Imported Components
import ProjectsCard from "./ProjectsCard/ProjectsCard";



export default function ProjectImageLeft({ project }) {
  const {
    title,
    tech,
    description,
    imageLink,
    imageAlt,
    imageStyle,
    hrefSourceCode,
    hrefViewLive,
  } = project;

  return (
    <div className="flex flex-col items-center w-full mb-12 lg:flex-row lg:justify-between lg:items-center">

      {/* project description */}
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOut"
        offset={300}
        duration={0.6}
        className="lg:w-3/5 mb-4 lg:mb-0"
      >
        <ProjectsCard
          projectTitle={title}
          projectTech={tech}
          projectDescription={description}
          hrefSourceCode={hrefSourceCode}
          hrefViewLive={hrefViewLive}
        />
      </AnimationOnScroll>

      {/* project image */}
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        animateOut="animate__fadeOut"
        offset={300}
        duration={0.6}
        className="lg:w-1/2"
      >
        <img src={imageLink} alt={imageAlt} style={imageStyle} />
      </AnimationOnScroll>

    </div>
  );
}