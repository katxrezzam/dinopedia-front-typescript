import styles from "./Filter.module.scss";
import {ComboBox, InputField} from "../../../../components";
import {useEffect, useState} from "react";

const options = ['a', 'e','i']
const values = ['perro', 'gato']
const Filter = () => {

  const [value, setValue] = useState('')

  return(
    <div className={styles.dinosaurs_filter}>
      <div className={`${styles.filter_field} ${styles.field_wide}`}>
        <label className={styles.filter_label} htmlFor="">Buscar</label>
        <div className={`${styles.input_field}`}>
          <InputField id={'search'} type={'search'} value={value} onChange={setValue}/>
        </div>
      </div>
      <div className={styles.filter_field}>
        <label className={styles.filter_label} htmlFor="">Pelvis</label>
        <div className={styles.buttons_field}>
          <div>
            <label htmlFor="">Saurisquios</label>
            <InputField id={'pelvis1'} type={'radio'} name={'pelvis'} value={values[0]} onChange={setValue}/>
          </div>
          <div>
            <label htmlFor="">Orinitisquios</label>
            <InputField id={'pelvis2'} type={'radio'} name={'pelvis'} value={values[1]} onChange={setValue}/>
          </div>
        </div>
      </div>
      <div className={styles.filter_field}>
        <label className={styles.filter_label} htmlFor="">Localización</label>
        <div className={styles.input_field}>
          <ComboBox/>
        </div>
      </div>
      <div className={styles.filter_field}>
        <label className={styles.filter_label} htmlFor="">Eras</label>
        <div className={styles.input_field}>
          <ComboBox/>
        </div>
      </div>
      <div className={styles.filter_field}>
        <label className={styles.filter_label} htmlFor="">Dieta</label>
        <div className={styles.buttons_field}>
          <div>
            <label htmlFor="">Carnivoros</label>
            <InputField type={'checkbox'} value={values[0]} onChange={setValue}/>
          </div>
          <div>
            <label htmlFor="">Herbivoros</label>
            <InputField type={'checkbox'} value={values[0]} onChange={setValue}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Filter