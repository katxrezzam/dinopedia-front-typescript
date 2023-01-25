import styles from './HomeEras.module.scss'
import Picture from "../picture/Picture";
import {ButtonSection} from "../../../../components/index";
const HomeEras = () => {
  return(
    <section className={styles.home_eras}>
      <div className="width-wrapper">
        <div className={styles.eras_container}>
          <div className={styles.eras_info}>
            <div className={styles.title}>
              <h1>Eras geologicas</h1>
            </div>
            <div className={styles.text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum dolore ex exercitationem facere harum
                itaque labore magnam maxime, molestiae non odio perspiciatis quas quos, vitae! Cum impedit molestiae
                soluta.
              </p>
            </div>
            <ButtonSection path={'/eras'} label={'EXPLORA'}/>
          </div>
          <div className={styles.eras_picture}>
            <Picture className={styles.bigger}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default  HomeEras