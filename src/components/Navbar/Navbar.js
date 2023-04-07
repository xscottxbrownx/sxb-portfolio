// Style Imports
import styles from "./Navbar.module.css";
// Component Imports
import PrimaryNav from "./PrimaryNav/PrimaryNav.js";
// import Toggle from "../Toggle/Toggle.js";
import SecondaryNav from "./SecondaryNav/SecondaryNav.js";


export default function Navbar() {

  return (
    <div className="top-0 left-0 z-50 sticky pt-1 pb-1 pr-1 pl-3 flex items-center justify-between bg-white">
      <div className={`animate__animated animate__fadeIn ${styles.navbarLeft}`}>
        <PrimaryNav />
      </div>
      <div className={`flexbox animate__animated animate__fadeIn ${styles.navbarRight}`}>
        {/* Add Toggle.js here - when complete */}
        <SecondaryNav />
      </div>
    </div>
  );
}