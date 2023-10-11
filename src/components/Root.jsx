import style from "../css/Root.module.css";
import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Root = () =>{
<div>
<Navbar/>
<div className={style.contain}><Outlet/></div>
</div>
}
export default Root;