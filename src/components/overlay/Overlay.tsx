import styles from './Overlay.module.scss'
import {Dispatch, ReactNode} from "react";

type Props = {
  children: ReactNode,
  open: boolean,
  setOpen: Dispatch<boolean>
}
const Overlay = ( {children, open, setOpen} : Props) => {
  return(
    <>
      {open &&
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className="width-wrapper">
            {children}
          </div>
        </div>
      }
    </>
  )
}
export default Overlay