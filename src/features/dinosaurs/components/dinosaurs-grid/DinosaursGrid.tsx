import styles from './DinosaursGrid.module.scss'
const DinosaursGrid = () => {
  return(
    <section className={styles.dinosaurs_grid}>
      <div className="width-wrapper">
        <div className={styles.grid_container}>
          <div className={styles.dinosaurs_filter}></div>
          <div className={styles.grid}></div>
        </div>
      </div>
    </section>
  )
}
export default DinosaursGrid