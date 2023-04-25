// React Icons Imports
import { IconContext } from "react-icons";
// Asset Imports
import { iconLinks } from "../Navbar/PrimaryNav";



export default function SocialMedia() {

  const contactIconLinks = iconLinks.map((iconLink) => (
    <a
      key={iconLink.href}
      className="flex items-center justify-center mx-1 lg:p-4 hover:text-accent2"
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



  return (
    <div className="hidden xs:flex lg:flex-col items-center justify-center mb-12">
      <IconContext.Provider value={{ className: "h-6 w-6 lg:h-14 lg:w-14 lg:p-2" }}>
        {contactIconLinks}
      </IconContext.Provider>
    </div>
  );
}