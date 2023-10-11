import React from 'react'
import {Link} from 'react-router-dom';
import styles from "../css/Home.module.css";

const Home = () => {
  return (
    <div className={styles.content} >
      <Link to ='/getuser'><button>User List</button></Link>
    </div>
  
    
  )
}

export default Home