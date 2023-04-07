// Style Imports
import styles from "./Intro.module.css";
import "animate.css";

//set cookie to only play animation every 2 days?  So it doesn't get replayed on reload of page

export default function Intro() {

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-[21%]">
      <header>
        <h1
          className={`text-6xl mb-6 animate__animated animate__fadeIn font-bold ${styles.introFirstLine}`}
        >
          Hi, I'm{" "}
          <span className="bg-main bg-clip-text text-transparent">Scott</span>.
        </h1>
        <h1
          className={`text-6xl mb-6 animate__animated animate__fadeIn font-bold ${styles.introSecondLine}`}
        >
          I'm a frontend developer.
        </h1>
      </header>
    </div>
  );
}