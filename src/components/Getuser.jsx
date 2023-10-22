import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import CardOne from "./CardOne";
import styles from "../css/Getuser.module.css"

const Getuser = () => { 
  const [data,setData] = useState([]);
const [loading,setLoading] = useState(true);
const [message,setMessage] = useState('');

  const handleDelete = async (id)=>{
    try{
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Content-type":"application/json",
        },
      });
      if(response.ok){
        setMessage(`Successfully delete user with ID ${id}`)
        setTimeout(()=>{
          setMessage("")
        },2000);
      fetchData();
      }else{
        setMessage(`Failed to delete user with Id ${id}`);
      }
    }catch(error){
      console.error(`Error deleting user :`,error);
    }
  };

  

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    try{
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/get`);
      if(!response.ok){
        throw new Error("response was not ok error fetching data");
      }
      const jsonData = await response.json()
      setData(jsonData);
      setLoading(false)
    }catch(error){
      console.log(error);
    }
  }
  console.log(data);
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <div>
      {loading ? <h1>Loading...</h1> :
        data.map((user)=>{
          return(
            <CardOne handleDelete={handleDelete} obj = {user}/>
          ) 
        })
      }
      </div>
    </div>
  )
}

export default Getuser