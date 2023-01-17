import styles from './HomeConcept.module.scss'
import Concept from "../concept/Concept";
const HomeConcept = () => {
  return(
    <section className={styles.home_concept}>
      <div className="width-wrapper">
        <div className={styles.row_concept}>
          <Concept/>
          <Concept/>
          <Concept/>
        </div>
      </div>
    </section>
  )
}
export default HomeConcept