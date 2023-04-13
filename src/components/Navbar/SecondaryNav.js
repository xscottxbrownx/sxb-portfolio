// React Icons imports
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { IconContext } from "react-icons";
import Resume from "../../assets/Scott_Brown_Resume.pdf";



export default function SecondaryNav({ mobileMenu }) {

  const menuIcons = [
    {
      href: "https://www.linkedin.com/in/scott-x-brown/",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/xscottxbrownx",
      icon: <FaGithub />,
    },
    {
      href: `${Resume}`,
      icon: <FaFilePdf />,
    },
  ];
  
  const menuIconsLinks = menuIcons.map((link) => (
    <a
      key={link.href}
      className="m-1"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
    </a>
  ));



  return (
    <div className={ mobileMenu ? "hidden" : "hidden md:flex" }>
      <IconContext.Provider value={{ className: "h-10 w-10 text-black hover:text-accent2" }}>
        {menuIconsLinks}
      </IconContext.Provider>
    </div>
  );
}