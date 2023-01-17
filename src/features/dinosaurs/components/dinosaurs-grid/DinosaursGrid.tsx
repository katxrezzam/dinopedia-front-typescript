import styles from './DinosaursGrid.module.scss'
import ComboBox from "../../../../components/combo-box/ComboBox";

const options = ['a', 'e','i']

const DinosaursGrid = () => {
  return(
    <section className={styles.dinosaurs_grid}>
      <div className="width-wrapper">
        <div className={styles.grid_container}>
          <div className={styles.dinosaurs_filter}>
            <div className={styles.filter_field}>
              <ComboBox options={options}/>
            </div>
            <div className={styles.filter_field}>
              <ComboBox/>
            </div>
            <div className={styles.filter_field}>
              <ComboBox/>
            </div>
          </div>
          <div className={styles.grid}></div>
        </div>
      </div>
    </section>
  )
}
export default DinosaursGrid