// Component Imports
import SlantedLink from "./SlantedLink/SlantedLink";
import Resume from "../../assets/Scott_Brown_Resume.pdf";
// React Icons Imports
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaFilePdf, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


// also used in ContactLinks.js
export const iconLinks = [
  { 
    href: Resume,
    icon: <FaFilePdf />,
    name: "Resume" 
  },
  {
    href: "https://www.linkedin.com/in/scott-x-brown/",
    icon: <FaLinkedin />,
    name: "LinkedIn",
  },
  {
    href: "https://github.com/xscottxbrownx",
    icon: <FaGithub />,
    name: "Github",
  },
  {
    href: "mailto:hello@scottxbrown.com?subject=Contacting%20via%20scottxbrown.com",
    icon: <FaEnvelope />,
    name: "Email",
  },
];



export default function PrimaryNav({ mobileMenu, setMobileMenu }) {

  // ===== START DESKTOP NAV =====
  const menuDivClass = mobileMenu
    ? "hidden"
    : "hidden md:flex items-center justify-start pl-2";

  const links = [
    { href: "#skills", text: "skills" },
    { href: "#projects", text: "projects" },
    { href: "#about", text: "about" },
    { href: "#contact", text: "contact" },
  ];

  const menuLinks = links.map((link) => (
    <SlantedLink
      key={link.href}
      href={link.href}
      text={link.text}
      mobileMenu={mobileMenu}
      setMobileMenu={setMobileMenu}
    />
  ));
  // ===== END DESKTOP NAV =====

  // ===== START MOBILE NAV =====
  const mobileMenuLinks = links.map((link) => (
    <li key={link.href} className="w-80">
      <SlantedLink
        href={link.href}
        text={link.text}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
    </li>
  ));

  const mobileMenuIconDivClass = mobileMenu
    ? "flex items-center justify-start"
    : "md:hidden flex items-center justify-start pl-2";

  const mobileMenuIcon = mobileMenu ? <MdClose /> : <GiHamburgerMenu />;

  const mobileMenuIconLinks = iconLinks.map((iconLink) => (
    <a
      className="flex items-center justify-center mx-1 my-3 lg:p-4 hover:text-accent2"
      href={iconLink.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconLink.icon}
      <h2 className="lg:p-2 font-extrabold text-base lg:text-2xl">
        {iconLink.name}
      </h2>
    </a>
  ));

  const handleClick = () => setMobileMenu((mobileMenu) => !mobileMenu);
  // ===== END MOBILE NAV =====



  // MAIN RETURN/RENDER OF COMPONENT
  // ====================================================================
  return (
    <nav>
      {/* Desktop Nav */}
      <div className={menuDivClass}>{menuLinks}</div>

      {/* Mobile Nav Button/Icon */}
      <div className={mobileMenuIconDivClass}>
        <IconContext.Provider
          value={{ className: "h-10 w-10 text-black hover:text-accent2" }}
        >
          <button className="outline-none" onClick={() => handleClick()}>
            {mobileMenuIcon}
          </button>
        </IconContext.Provider>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenu && (
        <div className="flex flex-col items-center w-screen">
          <ul>{mobileMenuLinks}</ul>
          {/* social media icon links */}
          <div className="flex-col xs:hidden items-center">
            <IconContext.Provider
              value={{ className: "h-6 w-6 lg:h-14 lg:w-14 lg:p-2" }}
            >
              {mobileMenuIconLinks}
            </IconContext.Provider>
          </div>
        </div>
      )}
    </nav>
  );
}