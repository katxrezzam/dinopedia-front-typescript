import {Dispatch, ReactNode} from "react";
import styles from './Main.module.scss'
type Props = {
  children: ReactNode,
  toggle: boolean,
}
const Main = ( {children, toggle} : Props ) => {
  return(
    <div className={toggle ? styles.main : `${styles.main} ${styles.close}`}>
      {children}
    </div>
  )
}
export default Main