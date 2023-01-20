import styles from './HomePaleontology.module.scss'
import Picture from "../picture/Picture";
import ButtonSection from "../../../../components/button/button-section/ButtonSection";
const HomePaleontology = () => {
  return(
    <section className={styles.home_paleontology}>
      <div className="width-wrapper">
        <div className={styles.paleontology_content}>
          <div className={styles.paleontology_info}>
            <h1 className={styles.paleontology_title}>Paleontologia</h1>
            <div className={styles.paleontology_text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta doloremque dolores dolorum
                ducimus eos excepturi expedita impedit in ipsam minus modi natus neque odit possimus reiciendis totam,
                vel voluptates.
              </p>
            </div>
            <div className={styles.button_field}>
              <ButtonSection path={'/paleontology'} label={'APRENDE'}/>
            </div>
          </div>
          <div className={styles.paleontology_pictures}>
            <div className={styles.circle}>
              <span></span>
            </div>
            <Picture className={'right'}/>
            <Picture className={'left'}/>
            <Picture className={'bellow'}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default  HomePaleontology