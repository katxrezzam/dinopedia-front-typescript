import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Dinosaurs from "./pages/Dinosaurs";
import Paleontology from "./pages/Paleontology";
import Eras from "./pages/Eras";

const App = () => {
  return(
    <div>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/dinosaurs'} element={<Dinosaurs/>}/>
          <Route path={'/paleontology'} element={<Paleontology/>}/>
          <Route path={'/eras'} element={<Eras/>}/>
        </Route>
      </Routes>
    </div>
  )
}
export default  App