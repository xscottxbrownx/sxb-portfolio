// React Imports
import { useState } from "react";
// Style Imports
import styles from "./Navbar.module.css";
// Component Imports
import PrimaryNav from "./PrimaryNav/PrimaryNav.js";
// import Toggle from "../Toggle/Toggle.js";
import SecondaryNav from "./SecondaryNav/SecondaryNav.js";


export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const border = mobileMenu ? "border-b-accent-4 border-b-4" : "";

  return (
    <div className={`top-0 left-0 z-10 fixed w-full py-1 sm:pl-3 flex items-center justify-between bg-white ${border}`}>

      <div className={`animate__animated animate__fadeIn ${styles.navbarLeft}`}>
        <PrimaryNav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
      </div>

      <div className={`animate__animated animate__fadeIn ${styles.navbarRight}`}>
        {/* Add Toggle.js here - when complete */}
        <SecondaryNav mobileMenu={mobileMenu}/>
      </div>

    </div>
  );
}