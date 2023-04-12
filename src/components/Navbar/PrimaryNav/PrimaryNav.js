// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";
// React Icons Imports
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";



export default function PrimaryNav({ mobileMenu, setMobileMenu }) {

  const handleClick = () => setMobileMenu(!mobileMenu);


  return (
    <nav> 
      <div
        className={
          mobileMenu
            ? "hidden"
            : "hidden md:flex items-center justify-start pl-2"
        }
      >
        <SlantedLink
          href="#skills"
          text="skills"
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <SlantedLink
          href="#projects"
          text="projects"
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <SlantedLink
          href="#about"
          text="about"
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <SlantedLink
          href="#contact"
          text="contact"
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      </div>

      {/* mobile menu button */}
      <div
        className={
          mobileMenu
            ? "flex items-center justify-start"
            : "md:hidden flex items-center justify-start pl-2"
        }
      >
        <IconContext.Provider
          value={{ className: "h-10 w-10 text-black hover:text-accent2" }}
        >
          <button className="outline-none" onClick={handleClick}>
            {mobileMenu ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </IconContext.Provider>
      </div>

      {/* mobile menu */}
      {mobileMenu && (
        <div className="flex flex-col items-center w-screen">
          <ul>
            <li className="w-80">
              <SlantedLink
                href="#skills"
                text="skills"
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            </li>
            <li className="w-80">
              <SlantedLink
                href="#projects"
                text="projects"
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            </li>
            <li className="w-80">
              <SlantedLink
                href="#about"
                text="about"
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            </li>
            <li className="w-80">
              <SlantedLink
                href="#contact"
                text="contact"
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}