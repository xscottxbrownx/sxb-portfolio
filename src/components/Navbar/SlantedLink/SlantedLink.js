// Style Imports
import styles from "./SlantedLink.module.css";



export default function SlantedLink({
  href,
  text,
  target,
  rel,
  mobileMenu,
  setMobileMenu,
}) {

  const handleClick = () => {
    if (mobileMenu) {
      setMobileMenu(!mobileMenu);
    }
  };


  
  return (
    <a
      className={`m-[.35rem] px-4 py-[.40rem] flex justify-center font-bold -skew-x-[38deg] bg-main bg-clip-text text-transparent border-2 group ${styles.slantedLink}`}
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      <span className="uppercase skew-x-[38deg] bg-main bg-clip-text text-transparent group-hover:text-white">
        {text}
      </span>
    </a>
  );
}
