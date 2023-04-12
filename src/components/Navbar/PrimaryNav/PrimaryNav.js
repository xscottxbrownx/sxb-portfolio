// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";
// React Icons Imports
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";


export default function PrimaryNav({ mobileMenu, setMobileMenu }) {

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  }




  return (
    <>
      <nav className={mobileMenu ? "hidden items-center justify-start pl-2" : "hidden md:flex items-center justify-start pl-2"}>
        <SlantedLink href="#skills" text="skills" />
        <SlantedLink href="#projects" text="projects" />
        <SlantedLink href="#about" text="about" />
        <SlantedLink href="#contact" text="contact" />
      </nav>
      {/* Mobile menu button */}
      <div className={mobileMenu ? "flex items-center justify-start pl-2" : "md:hidden flex items-center justify-start pl-2"}>
        <IconContext.Provider value={{ className: "h-10 w-10 text-black hover:text-accent2" }}>
          <button className="outline-none" onClick={handleClick}>
            {mobileMenu ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </IconContext.Provider>
      </div>
      {/* mobile menu */}
      <div className={mobileMenu ? "" : "hidden"}>
        <ul className="flex flex-col items-center w-screen">
          <li className="w-80">
            <SlantedLink href="#skills" text="skills"  />
          </li>
          <li className="w-80">
            <SlantedLink href="#projects" text="projects" />
          </li>
          <li className="w-80">
            <SlantedLink href="#about" text="about" />
          </li>
          <li className="w-80">
            <SlantedLink href="#contact" text="contact" />
          </li>
        </ul>
      </div>
    </>
  );
}