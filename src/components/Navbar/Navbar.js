// Style Imports
import styles from "./Navbar.module.css";
// Component Imports
import PrimaryNav from "../PrimaryNav/PrimaryNav.js";
import Toggle from "../Toggle/Toggle.js";
import SecondaryNav from "../SecondaryNav/SecondaryNav.js";


function Navbar() {
    return (

      <div className={styles.navbarWrapper}>
        <div className={`animate__animated animate__fadeInLeft ${styles.navbarLeft}`}>
          <PrimaryNav />
        </div>
        <div className={`flexbox animate__animated animate__fadeInRight ${styles.navbarRight}`}>
          <Toggle />
          <SecondaryNav />
        </div>
        
      </div>

    );
  }
  
  export default Navbar;