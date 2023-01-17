import styles from './Dialog.module.scss'
import {Dispatch} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import image from '../../assets/images/dino-ico.png'
type Props = {
  setOpen: Dispatch<boolean>,
}
const Dialog = ({ setOpen } : Props ) => {
  return(
    <div className={styles.dialog}>
      <div className={styles.dialog_title}>
        <h1>Concept</h1>
      </div>
      <div className={styles.dialog_content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate, distinctio eaque eum illum
          inventore iste laboriosam natus provident, quae quam ratione recusandae repudiandae sequi vero voluptatem
          voluptatum! Distinctio, incidunt?
        </p>
        <div className={styles.dialog_img}>
          <img src={image} alt="dialog"/>
        </div>
      </div>
      <span className={styles.close} onClick={ () => setOpen(false)}>
        <FontAwesomeIcon icon={faXmark}/>
      </span>
    </div>
  )
}
export default Dialog