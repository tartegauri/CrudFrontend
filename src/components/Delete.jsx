import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Delete = () => {

  const [id,setId] = useState(0);
  const [message,setMessage] = useState('')

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
      }else{
        setMessage(`Failed to delete user with Id ${id}`);
      }
    }catch(error){
      console.error(`Error deleting user :`,error);
    }
  };

  return (
    <div>
      <h2>delete user</h2>
      <label>
        <input type = "text" value={id} onChange={(e)=>setId(e.target.value)}/>
      </label>
      <button onClick={handleDelete}>Delete User</button>
      <p>{message}</p>
      <Link to ="/getuser" > <button>check user list to confirm</button></Link>
    </div>
  )
}

export default Delete