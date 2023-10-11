import React from "react";
const CardOne = ({obj})=>{
  return (
    <div>
      <h1>ID : {obj.id}</h1>
      <h3> NAME : {obj.name}</h3>
      <h3> AGE : {obj.age}</h3>
      <h3> EMAIL : {obj.email}</h3>
      <h3>SKILLS :{obj.technical_skills}</h3>
      <h3> LOCATION : {obj.location}</h3>
      <p>ABOUT ME : {obj.bio}</p>
      <h3></h3>
    </div>
  )
}

export default CardOne 