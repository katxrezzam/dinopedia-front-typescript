import styles from './InputField.module.scss'
import {Dispatch, RefObject, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

type Props = {
  id?: string,
  type: string,
  name?: string,
  placeholder?: string,
  checked?: boolean,
  disabled?: boolean
  value: any,
  onChange: Dispatch<any>,
  ref?: RefObject<HTMLInputElement>
}
const InputField = ({id, type, placeholder, checked, disabled, name, value, onChange, ref} : Props) => {

  const change = (e : any) => {
    onChange(e.target.value)
  }
  useEffect(() => {
    console.log(value)
  }, [value])
  return(
    <div className={styles.input_box}>
      {type === 'search' &&
        (<span className={styles.icon}>
          <FontAwesomeIcon icon={faSearch}/>
        </span>)
      }
      <input
        id={id}
        type={type}
        className={styles[type]}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        value={value}
        onChange={change}
        ref={ref}
      />
    </div>

  )
}
export default  InputField