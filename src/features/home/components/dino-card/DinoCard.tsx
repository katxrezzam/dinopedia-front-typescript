import styles from './DinoCard.module.scss'
import dinoLogo from '../../../../assets/images/dino-ico.png'
import {useState} from "react";
const DinoCard = () => {

  const [hovered, setHovered] = useState(false)

  return(
    <div
      className={styles.dino_card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={ () => setHovered(false)}
    >
      <img src={dinoLogo} alt="logo"/>
      {hovered &&
        <div className={styles.dino_label}>
          <span className={styles.dino_name}>
            NAME
          </span>
        </div>
      }
    </div>
  )
}
export default DinoCard