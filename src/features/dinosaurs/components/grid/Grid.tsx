import {useEffect, useState} from "react";
import styles from './Grid.module.scss'
import {DinoCard} from "../../../../components";
const Grid = () => {

  const [dinos, setDinos] = useState<any[]>([])

  useEffect( () => {
    const fill = () => {
      const aux : any = []
      for( let i = 0; i < 100; i++){
        aux.push(i)
      }
      setDinos(aux)
    }
    fill()
  }, [])

  return(
    <div className={styles.dinosaur_grid}>
      {
        dinos.map( item => <DinoCard/>)
      }
    </div>
  )
}
export default Grid