import React from 'react'
import styles from "../css/Toast.module.css"

const Toast = ({message,isPositive}) => {
  const good = "👍";
  const bad = "❌";
  return (
    <div className={styles.toast} >{
      message!==""?<span>{isPositive?good:bad}{message}</span> :<></>
    }</div>
  )
}

export default Toast