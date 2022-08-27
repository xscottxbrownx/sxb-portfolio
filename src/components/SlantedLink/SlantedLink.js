// Style Imports
import styles from "./SlantedLink.module.css";


function SlantedLink({href, text}) {
    return (
        <a className={styles.slantedLink} href={href}>
            <span className={styles.slantedLinkContent}>{text}</span>
        </a>
    );
}

export default SlantedLink;