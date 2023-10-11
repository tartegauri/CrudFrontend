import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import CardOne from "./CardOne";


const Getuser = () => { 

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
      fetchData();
      }else{
        setMessage(`Failed to delete user with Id ${id}`);
      }
    }catch(error){
      console.error(`Error deleting user :`,error);
    }
  };

  const [data,setData] = useState([]);


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
    }catch(error){
      console.log(error);
    }
  }
  console.log(data);
  return (
    <div>
      {
        data.map((user)=>{
          return(
            <>
            <CardOne obj = {user}/>
            <Link  to= {`/updateuser/${user.id}`}><button>EDIT PROFILE</button></Link>
            <button onClick = {
              ()=>handleDelete(user.id)}>DLETE USER</button>
              <p>{message}</p>
            </> 
          ) 
        })
      }
    </div>
  )
}

export default Getuser