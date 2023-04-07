// Style Imports
import styles from "./SlantedLink.module.css";



export default function SlantedLink({ href, text, target, rel }) {

  return (
    <a
      className={`m-[.35rem] py-[.40rem] px-4 flex font-bold -skew-x-[38deg] bg-main bg-clip-text text-transparent border-2 group ${styles.slantedLink}`}
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