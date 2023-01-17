import {DinosaursGrid, DinosaursHeader} from "../features/dinosaurs";

const Dinosaurs = () => {
  return(
    <div className={'dinosaurs'}>
      <DinosaursHeader/>
      <DinosaursGrid/>
    </div>
  )
}

export default Dinosaurs