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
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
// Custom Component Imports
import SkillCategory from "./SkillCategory";


export default function Skills() {

  // MAKE ANY CHANGES TO FRONTEND SKILLS HERE
  const FrontEndIcons = [
    { Icon: FaReact, name: "React" },
    { Icon: FaJsSquare, name: "Javascript" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: FaBootstrap, name: "Boostrap" },
    { Icon: FaCss3Alt, name: "CSS" },
    { Icon: FaHtml5, name: "HTML" },
  ];

  // MAKE ANY CHANGES TO TOOLS SKILLS HERE
  const ToolIcons = [
    { Icon: FaGitAlt, name: "GIT" },
    { Icon: FaGithubSquare, name: "Github" },
    { Icon: SiVisualstudiocode, name: "VScode" },
    { Icon: FaDiscord, name: "Discord" },
  ];

  // MAKE ANY CHANGES TO BACKEND SKILLS HERE
  const BackEndIcons = [
    { Icon: FaNode, name: "Node.js"},
    { Icon: SiFirebase, name: "Firebase"},
    { Icon: SiPostgresql, name: "Postgres"},
  ];


  
  return (
    <section id="skills" className="bg-main pb-20 lg:h-screen">
      <div className="flex flex-col items-center justify-center mx-[5%] lg:mx-[21%]">
        {/* skills section title */}
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1.75}
        >
          <h1 className="uppercase p-20 text-4xl lg:text-5xl font-bold">skills</h1>
        </AnimationOnScroll>

        <IconContext.Provider value={{ className: "h-12 w-12 m-2 lg:m-4" }}>
          <SkillCategory title="Front&nbsp;End" icons={FrontEndIcons} Icon={FaLaptopCode} />
          <SkillCategory title="Tools" icons={ToolIcons} Icon={FaTools} />
          <SkillCategory title="Back&nbsp;End" icons={BackEndIcons} Icon={FaServer} />
        </IconContext.Provider>
      </div>
    </section>
  );
}