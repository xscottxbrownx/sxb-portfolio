// Style Imports
import styles from "./SlantedLink.module.css";

function SlantedLink({ href, text }) {
  return (
    <a
      className={styles.slantedLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.slantedLinkContent}>{text}</span>
    </a>
  );
}

export default SlantedLink;
