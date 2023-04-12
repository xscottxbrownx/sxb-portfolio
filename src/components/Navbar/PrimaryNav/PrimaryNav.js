// Component Imports
import SlantedLink from "../SlantedLink/SlantedLink";
import Resume from "../../../assets/Scott_Brown_Resume.pdf";
// React Icons Imports
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaFilePdf, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";



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
          {/* social media icon links */}
          <div className="flex-col xs:hidden items-center">
              <IconContext.Provider value={{ className: "h-6 w-6 lg:h-14 lg:w-14 lg:p-2" }}>
                {/* Resume */}
                <a
                  className="flex items-center justify-center mx-1 my-3 lg:p-4 hover:text-accent2"
                  href={`${Resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">Resume</h2>
                </a>
                {/* LinkedIn */}
                <a
                  className="flex items-center justify-center mx-1 my-3 lg:p-4 hover:text-accent2"
                  href="https://www.linkedin.com/in/scott-x-brown/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">LinkedIn</h2>
                </a>
                {/* Github */}
                <a
                  className="flex items-center justify-center mx-1 my-3 lg:p-4 hover:text-accent2"
                  href="https://github.com/xscottxbrownx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">Github</h2>
                </a>
                {/* Email */}
                <a
                  className="flex items-center justify-center mx-1 my-3 lg:p-4 hover:text-accent2"
                  href="mailto:hello@scottxbrown.com?subject=Contacting%20via%20scottxbrown.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                  <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">Email</h2>
                </a>
              </IconContext.Provider>
            </div>
        </div>
      )}
    </nav>
  );
}