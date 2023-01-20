import styles from './ButtonSection.module.scss'
import {useNavigate} from "react-router-dom";

type Props = {
  path: string,
  label?: string,
}
const ButtonSection = ({ path, label } : Props) => {

  const navigate = useNavigate()

  const goTo = () => {
    navigate(path)
  }

  return(
    <button className={styles.button_section} onClick={goTo}>
      {label}
    </button>
  )
}
export default  ButtonSection