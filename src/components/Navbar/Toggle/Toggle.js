// React Icons Imports
import { FaSun, FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons";


// Set this with localStorage, so it remembers my choice
 
export default function Toggle() {

  return (
    <div className="flex items-center justify-center mr-6">
      <IconContext.Provider value={{ className: "h-[1.15rem] w-1.15[rem]" }}>
        <button className="flex items-center justify-center">
          <FaSun />
          <FaMoon />
        </button>
      </IconContext.Provider>
    </div>
  );
}