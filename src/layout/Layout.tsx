import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import Header from "./header/Header";
import {Outlet} from "react-router-dom";
import {useState} from "react";
const Layout = () => {

  const [toggle, setToggle] = useState(false)

  return(
    <>
      <Sidebar toggle={toggle} setToggle={setToggle}/>
      <Header toggle={toggle}/>
      <Main toggle={toggle}>
        <Outlet/>
      </Main>
    </>
  )
}
export default Layout