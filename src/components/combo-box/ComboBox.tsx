import styles from './ComboBox.module.scss'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretRight} from'@fortawesome/free-solid-svg-icons'

type Props = {
  value?: string,
  options?: string[]
}
const ComboBox = ({ value, options} : Props) => {

  const [open, setOpen] = useState(false)

  const handleChange = (text : string) => {
    console.log(text)
  }

  return(
    <div className={styles.combo_box} onClick={() => setOpen(!open)}>
      <span className={styles.value}>
        {value ?? 'Seleccione una opción'}
      </span>
      <span>
        <FontAwesomeIcon icon={faCaretDown}/>
      </span>
      {open &&
        <ul className={styles.options}>
          {options
            ? (options.map((item, index) => <li key={index} onClick={() => handleChange(item)}>{item}</li>))
            : (<p>No hay opciones para mostrar</p>)
          }
        </ul>
      }
    </div>

  )
}
export default ComboBox