import styles from './HomeFooter.module.scss'
const HomeFooter = () => {
  return(
    <div className={styles.home_footer}>
      <div className="width-wrapper">
        <div className={styles.footer_info}>
          <div className={styles.us_info}>
            <ul className={styles.info_list}>

            </ul>
          </div>
          <div className={styles.brand_info}>
            <div className={styles.brand_name}>
              <h1>Dinopedia</h1>
            </div>
            <div className={styles.info}>
              <p>2023</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeFooter