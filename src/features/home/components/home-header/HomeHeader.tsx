import styles from './HomeHeader.module.scss'
import Picture from "../picture/Picture";
const HomeHeader = () => {
  return(
    <section className={styles.home_header}>
      <div className="width-wrapper">
        <div className={styles.header_content}>
          <div className={styles.dino_info}>
          <span className={styles.dino_title}>
            <h1>Dinopedia</h1>
          </span>
            <div className={styles.dino_content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet consequuntur in maxime odio
                reiciendis temporibus. Autem cum cumque dolores earum eius illo inventore officiis quod ratione,
                reiciendis sed voluptas.
              </p>
            </div>
          </div>
          <div className={styles.dino_card}>
            <Picture className={styles.width}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeHeader