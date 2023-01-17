import {Dispatch, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import SidebarLink from "./components/sidebar-link/SibarLink";
import logo from '../../assets/images/dino-ico.png'
import styles from './Sidebar.module.scss'
import {links} from "./models/sidebar-link";

type Props = {
  toggle: boolean,
  setToggle: Dispatch<boolean>,
}
const Sidebar = ( {toggle, setToggle} : Props ) => {

  return(
    <aside className={ toggle ? styles.sidebar : `${styles.sidebar} ${styles.close}`}>
      <header>
        <div className={styles.logo_container}>
          <span className={styles.image}>
            <img src={logo} alt=""/>
          </span>
          <span className={styles.sidebar_title}>
            Dinopedia
          </span>
        </div>
        <span className={styles.toggle} onClick={ () => setToggle(!toggle)}>
          { toggle
            ? (<FontAwesomeIcon icon={faCaretRight}/>)
            : (<FontAwesomeIcon icon={faCaretDown}/>)
          }
        </span>
      </header>
      <div className={styles.menu_container}>
        <div className={styles.menu}>
          <ul className={styles.menu_link}>
            {links.map( (link, i) => {
              return <SidebarLink
                key={i}
                path={link.path}
                icon={link.icon}
                isClosed={!toggle}
                text={link.label}
              />
            })}
          </ul>
        </div>
      </div>
    </aside>
  )
}
export default Sidebar