// Component Imports
import SlantedLink from "../../Navbar/SlantedLink/SlantedLink";

export default function ProjectsCard({
  projectTitle,
  projectTech,
  projectDescription,
  hrefSourceCode,
  hrefViewLive,
  wip = false,
}) {
  const projectTechList = projectTech.map((tech) => (
    <div
      className="m-0.5 lg:m-1 py-[3px] px-[3px] lg:px-[10px] cursor-default bg-accent4 text-xs font-light rounded"
      key={tech.toString()}
    >
      {tech}
    </div>
  ));

  return (
    // project card with all info on project
    <div className="text-center flex flex-col justify-center mx-[10%] lg:mx-0">
      {/* project title */}
      <h2 className="text-2xl font-bold">{projectTitle}</h2>

      {/* list of tech stack used in project */}
      <div
        id="techButtons"
        className="text-center inline-flex justify-center mt-2"
      >
        {projectTechList}
      </div>

      {/* if project is a work in progress */}
      {wip && (
        <div
          className={`flex justify-center align-middle my-2 p-2 bg-main uppercase font-bold text-white`}
        >
          <p>Work In Progress</p>
        </div>
      )}

      {/* project description */}
      <div className="leading-loose">
        <p>{projectDescription}</p>
      </div>

      {/* links to code and hosted project */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-4">
        <SlantedLink
          href={hrefSourceCode}
          text="source code"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SlantedLink
          href={hrefViewLive}
          text="view live"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
