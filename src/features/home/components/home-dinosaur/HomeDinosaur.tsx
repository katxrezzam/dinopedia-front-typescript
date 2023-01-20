import styles from './HomeDinosaur.module.scss'
import DinoCard from "../dino-card/DinoCard";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
const HomeDinosaur = () => {

  const [array, setArray] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const aux = []
    for (let i = 0; i < 33; i++) {
      aux.push(i)
    }
    setArray(aux)
  }, [])

  return(
    <section className={styles.home_dinosaur}>
      <div className="width-wrapper">
        <div className={styles.slider_text}>
          <div className={styles.title}>
            <h1>Descubre nuevos dinosaurios</h1>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid consectetur, deleniti
              dolores fugiat harum hic ipsa laborum magnam, maxime minus numquam quas ratione, sequi vel velit veritatis
              voluptatibus?
            </p>
          </div>
        </div>
        <div className={styles.button_field}>
          <button onClick={() => navigate('/dinosaurs')}>
            VER TODOS
          </button>
        </div>
        <div className={styles.dino_grid}>
          <div className={`${styles.dino_row} ${styles.animation}`}>
            {array.map( item => {
              return <DinoCard key={item}/>
            })}
          </div>
          <div className={`${styles.dino_row} ${styles.animation_reverse}`}>
            {array.map( item => {
              return <DinoCard key={item}/>
            })}
          </div>
          <div className={`${styles.dino_row} ${styles.animation}`}>
            {array.map( item => {
              return <DinoCard key={item}/>
            })}
          </div>
          <div className={`${styles.dino_row} ${styles.animation_reverse}`}>
            {array.map( item => {
              return <DinoCard key={item}/>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeDinosaur