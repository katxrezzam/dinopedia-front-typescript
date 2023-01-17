import styles from './Concept.module.scss'
import imageConcept from '../../../../assets/images/dino-ico.png'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from "@fortawesome/free-solid-svg-icons"
import Overlay from "../../../../components/overlay/Overlay";
import Dialog from "../../../../components/dialog/Dialog";
const Concept = () => {

  const [open, setOpen] = useState(false)

  return(
    <>
      <div className={styles.concept}>
        <div className={styles.title_concept}>
          <h1>Concept</h1>
        </div>
        <div className={styles.content_concept}>
        <span>
          <img src={imageConcept} alt="concept"/>
        </span>
        </div>
        <div
          className={open ? `${styles.icon_concept} open` : styles.icon_concept}
          onClick={ () => setOpen(!open)}
        >
          { open
            ? (<FontAwesomeIcon icon={faCaretUp}/>)
            : (<FontAwesomeIcon icon={faCaretDown}/>)
          }
        </div>
      </div>
      <Overlay open={open} setOpen={setOpen}>
        <Dialog setOpen={setOpen}/>
      </Overlay>
    </>
  )
}
export default Concept