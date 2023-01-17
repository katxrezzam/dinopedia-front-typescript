import {useState} from "react";
import {Link} from "react-router-dom";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './SidebarLink.module.scss'
type Props = {
  path: string,
  icon: IconDefinition,
  isClosed: boolean,
  text: string
}
const SidebarLink = ( {path, icon, isClosed, text} : Props) => {
  const [hovered, setHovered] = useState(false)
  return(
    <li
      className={ isClosed ? `${styles.sidebar_link} ${styles.close}` : styles.sidebar_link}
      onMouseEnter={ () => setHovered(true)}
      onMouseLeave={ () => setHovered(false)}
    >
      <Link to={path}>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={icon}/>
        </span>
        <div className={styles.link_text}>
          {text}
        </div>
      </Link>
      {isClosed && hovered && <span className={styles.link_text_closed}>{text}</span>}
    </li>
  )
}
export default SidebarLink