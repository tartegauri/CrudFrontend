import React from 'react'
import {Link} from "react-router-dom";
import styles from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <div className = {styles.container}>
      <div>
        CRUD
      </div>
      <div>
        <Link to = '/'>HOME</Link>
        <Link to = 'postuser'>CREATE PROFILE</Link>
      </div>
    </div>
  )
}

export default Navbar