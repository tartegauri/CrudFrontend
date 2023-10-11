import { useState } from 'react'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Getuser from "./components/Getuser";
import Delete from "./components/Delete";
import Post from "./components/Post";
import Update from "./components/Update";
import Home from "./components/Home";
import Root from "./components/Root";

function App() {
 
  return (
    <>
      <Router>
      
       <Routes>
        <Route path = "/" element = {<Root/>}>
        <Route indexelement = {<Home/>}/>
        <Route path="/getuser" element = {<Getuser/>} />
        <Route path = "/deleteuser/:id" element = {<Delete/>}/>
        <Route path = "/postuser" element = {<Post/>}/>
        <Route path = "/updateuser/:id" element = {<Update/>}/>
        </Route>
       </Routes>
      </Router>
    </>
  )
}

export default App
