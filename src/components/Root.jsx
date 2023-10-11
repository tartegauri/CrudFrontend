import style from "../css/Root.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className={style.contain}><Outlet /></div>
    </div>
  )
}

export default Root;