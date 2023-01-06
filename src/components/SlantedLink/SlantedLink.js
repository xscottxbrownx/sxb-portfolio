// Style Imports
import styles from "./SlantedLink.module.css";


function SlantedLink({ href, text, target, rel }) {
  return (
    <a className={styles.slantedLink} href={href} target={target} rel={rel}>
      <span className={styles.slantedLinkContent}>{text}</span>
    </a>
  );
}

export default SlantedLink;
