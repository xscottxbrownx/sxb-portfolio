// React Icons Imports
import { FaArrowCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function Footer() {
  
  return (
    <footer className="bg-main flex items-center justify-center">
      <a
        href="#top"
        className="p-4 lg:p-12 transition-transform ease-in-out duration-500 hover:text-white hover:-translate-y-2"
      >
        <div className="flex justify-center">
          <IconContext.Provider value={{ className: "h-6 w-6" }}>
            <FaArrowCircleUp />
          </IconContext.Provider>
        </div>
        <p className="uppercase">back to top</p>
      </a>
    </footer>
  );
}