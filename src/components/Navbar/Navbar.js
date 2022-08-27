// Style Imports
import styles from "./Navbar.module.css";
// Component Imports
import PrimaryNav from "../PrimaryNav/PrimaryNav.js";
import Toggle from "../Toggle/Toggle.js";
import SecondaryNav from "../SecondaryNav/SecondaryNav.js";


function Navbar() {
    return (

      <div className={styles.navbarWrapper}>

        <PrimaryNav />
        <div className="flexbox">
          <Toggle />
          <SecondaryNav />
        </div>
        
      </div>

    );
  }
  
  export default Navbar;