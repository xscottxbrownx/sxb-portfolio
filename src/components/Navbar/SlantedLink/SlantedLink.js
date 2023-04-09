// Style Imports
import styles from "./SlantedLink.module.css";



export default function SlantedLink({ href, text, target, rel }) {

  // breakpoint to determine what padding to use
  const mobileView = window.innerWidth <= 768;

  const paddingX = mobileView ? "px-2" : "px-4"
  const paddingY = mobileView ? "py-[.20rem]" : "py-[.40rem]"



  return (
    <a
      className={`m-[.35rem] ${paddingY} ${paddingX} flex font-bold -skew-x-[38deg] bg-main bg-clip-text text-transparent border-2 group ${styles.slantedLink}`}
      href={href}
      target={target}
      rel={rel}
    >
      <span className="uppercase skew-x-[38deg] bg-main bg-clip-text text-transparent group-hover:text-white">
        {text}
      </span>
    </a>
  );
}