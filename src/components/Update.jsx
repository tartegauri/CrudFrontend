import React , {useState,useEffect} from 'react';
import {useParams,useNavigate} from "react-router-dom";

const Update = () => {

  const [userData,setUserData] = useState({
    id:0,
    name:"",
    age:0,
    email:"",
    technical_skills:"",
    location:"",
    bio:""
  });

  const [message,setMessage] = useState();
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchAUserData = async (id)=>{
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/getspecificuser/${id}`);
    const data = await response.json();
    console.log(data);
    setUserData(data[0]);
  }

  useEffect(()=>{
    fetchAUserData(id);
  },[])
  
  const handleChange = (e)=>{
    setUserData((prev)=>{
      return{
        ...prev,
        [e.target.name]: isNaN(e.target.value) ? e.target.value : parseInt(e.target.value),
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!userData.name||!userData.age||!userData.email||!userData.technical_skills||!userData.location||!userData.bio){
      setMessage("Please dont leave any fields empty");
      return;
    }

    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/patch/${id}`,{
         method:"PATCH",
         headers:{
          'Content-type':'application/json',
         },
         body : JSON.stringify(userData),
    })// sang pillu
    if(response.ok){
      const data = await response.json();
      setMessage(data.message);
     console.log("done")
    }else{
      setMessage(data.message);
    }
  };


  return (
    <div>
     <h4>{message}</h4>
     <form>

     <label>Enter Id</label>
        <input
        onChange={handleChange}
        type = "number"
        name="id"
        value={userData.id}/>
     
      <label>NAME</label>
        <input
        onChange={handleChange}
        type = "text"
        name="name"
        value={userData.name}/>
     

      <label>AGE</label>
        <input
        onChange = {handleChange}
        type = "number"
        name="age"
        value = {userData.age}
        />

       <label>EMAIL</label>
        <input
        onChange = {handleChange}
        type = "text"
        name="email"
        value = {userData.email}
        />
     
     <label>SKILLS</label>
        <input
        onChange = {handleChange}
        type = "text"
        name="technical_skills"
        value = {userData.technical_skills}
         />
     
     <label>LOCATION</label>
        <input
        onChange = {handleChange}
        type = "text"
        name="location"
        value = {userData.location}
         />
     
      
     <label>ABOUT YOU</label>
        <input
        onChange = {handleChange}
        type = "text"
        name="bio"
        value = {userData.bio}
         />
     
     <button type="submit" onClick={handleSubmit}>UPDATE</button>
     </form>
    </div>
  )
}

export default Update