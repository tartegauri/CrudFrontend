import React from "react";
import styles from "../css/CardOne.module.css";
import { Link } from "react-router-dom";
const CardOne = ({ obj, handleDelete }) => {
  return (
    <div className={styles.container}>
      <h3>ID : {obj.id}</h3>
      <h3> NAME : {obj.name}</h3>
      <h3> AGE : {obj.age}</h3>
      <h3> EMAIL : {obj.email}</h3>
      <h3>SKILLS :{obj.technical_skills}</h3>
      <h3> LOCATION : {obj.location}</h3>
      <h3>ABOUT ME : {obj.bio}</h3>
      <div>
      <button>
      <Link to={`/updateuser/${obj.id}`}>
        EDIT USER
      </Link></button>
      <button onClick={() => handleDelete(obj.id)}>DELETE USER</button>
      </div>
    </div>
  );
};

export default CardOne;
