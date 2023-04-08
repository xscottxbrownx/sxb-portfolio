// Imports from React Animate On Scroll
import { AnimationOnScroll } from "react-animation-on-scroll";
// Imported Components
import ProjectsCard from "./ProjectsCard/ProjectsCard";



export default function ProjectImageRight({project}) {
  const { title, tech, description, imageLink, imageAlt, imageStyle, hrefSourceCode, hrefViewLive } = project;

  return (
    <div className="flex justify-between items-center w-full mb-12">
      {/* project description */}
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOut"
        offset={300}
        duration={0.6}
      >
        <div>
          <ProjectsCard
            projectTitle={title}
            projectTech={tech}
            projectDescription={description}
            hrefSourceCode={hrefSourceCode}
            hrefViewLive={hrefViewLive}
          />
        </div>
      </AnimationOnScroll>
      {/* project image */}
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        animateOut="animate__fadeOut"
        offset={300}
        duration={0.6}
      >
        <div>
          <img
            src={imageLink}
            alt={imageAlt}
            style={imageStyle}
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
}