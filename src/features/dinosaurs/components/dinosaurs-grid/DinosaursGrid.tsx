import styles from './DinosaursGrid.module.scss'
import {ComboBox, InputField } from "../../../../components/index";
import {useEffect, useState} from "react";
import Filter from "../filter/Filter";
import Grid from "../grid/Grid";
const DinosaursGrid = () => {

  return(
    <section className={styles.dinosaurs_grid}>
      <div className="width-wrapper">
        <div className={styles.grid_container}>
          <Filter/>
          <Grid/>
        </div>
      </div>
    </section>
  )
}
export default DinosaursGrid