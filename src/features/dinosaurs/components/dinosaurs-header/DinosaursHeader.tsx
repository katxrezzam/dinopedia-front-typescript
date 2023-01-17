import styles from './DinosaursHeader.module.scss'
const DinosaursHeader = () => {
  return(
    <section className={styles.dinosaurs_header}>
      <div className="width-wrapper">
        <div className={styles.dinosaurs_content}>
          <div className={styles.dinosaurs_title}>
            Dinosaurios
          </div>
          <div className={styles.dinosaurs_info}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum illum laboriosam nisi quia
              quidem soluta! Aut commodi dolorem fuga laudantium modi nobis rem? Accusamus asperiores enim magni sint
              vero.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DinosaursHeader