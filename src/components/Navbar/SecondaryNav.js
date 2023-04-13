// React Icons imports
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { IconContext } from "react-icons";
import Resume from "../../assets/Scott_Brown_Resume.pdf";



export default function SecondaryNav({ mobileMenu }) {
  
  return (
    <div className={ mobileMenu ? "hidden" : "hidden md:flex" }>
      <IconContext.Provider value={{ className: "h-10 w-10 text-black hover:text-accent2" }}>
        {/* LinkedIn */}
        <a
          className="m-1"
          href="https://www.linkedin.com/in/scott-x-brown/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* Github */}
        <a
          className="m-1"
          href="https://github.com/xscottxbrownx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* Resume PDF */}
        <a
          className="m-1"
          href={`${Resume}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf />
        </a>
      </IconContext.Provider>
    </div>
  );
}