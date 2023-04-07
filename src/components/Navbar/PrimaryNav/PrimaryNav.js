// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";


export default function PrimaryNav() {
  return (
    <nav className="flex items-center justify-start pl-2">
      <SlantedLink href="#skills" text="skills" />
      <SlantedLink href="#projects" text="projects" />
      <SlantedLink href="#about" text="about" />
      <SlantedLink href="#contact" text="contact" />
    </nav>
  );
}