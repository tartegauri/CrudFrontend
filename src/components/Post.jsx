import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom";
import Toast from "./Toast.jsx";

const Post = () => {
const navigate = useNavigate();
//const [message,setMessage] = useState("");
const [formData,setFormData] = useState(
  {
    id:0,
    name:"",
    age:0,
    email:"",
    technical_skills:"",
    location:"",
    bio:""
  }
)
const [msg , setMsg] = useState("");
const [positive,setPositive] = useState(false);
const setMessage = (message,positive) => {
  setMsg(message,positive);
  setTimeout(()=>{
    setMsg("",false)
  },2000);
}

const handleChange = (e)=>{
  const {name,value} = e.target;

  setFormData({
    ...formData,
    [e.target.name]: isNaN(e.target.value) ? e.target.value : parseInt(e.target.value),
  });
 
};

const handleSubmit = async(e)=>{
  e.preventDefault();
  console.log(formData);
  if(formData.name===""){
    setMessage("Please Don't Leave any fiels empty",false);
    return;
  }try{
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/post`,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(formData),
    })
    const data = await response.json();
    if(response.ok){
      setMessage("Data added",true)
    }else{
      setMessage("falied to post data",false)
    }
  }catch(error){
    setMessage(error,false)
    console.error("An error occurred",error);
  }
};

  return (
    <div>
      <Toast message={msg} isPositive={positive}/>
      <form>
        <h2> CREATE YOUR PROFILE </h2>
        <label>Name</label>
        <input 
        type = "text"
        name = "name"
        value={formData.name}
        onChange={handleChange}
        />

          <label>AGE</label>
        <input 
        type = "number"
        name = "age"
        value={formData.age}
        onChange={handleChange}
        />

        <label>Email</label>
        <input 
        type = "text"
        name = "email"
        value={formData.email}
        onChange={handleChange}
        />

        <label>Tech skills</label>
        <input 
        type = "text"
        name = "technical_skills"
        value={formData.technical_skills}
        onChange={handleChange}
        />

        <label>Location</label>
        <input 
        type = "text"
        name = "location"
        value={formData.location}
        onChange={handleChange}
        />

        <label>About You</label>
        <input 
        type = "text"
        name = "bio"
        value={formData.bio}
        onChange={handleChange}
        />

        <button type = "submit" onClick={handleSubmit}>Submit</button>
        
      </form>
    </div>
  )
}

export default Post