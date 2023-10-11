import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import react from "react"
//// line nu
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
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/getuser" element={<Getuser />} />
            <Route path="/deleteuser/:id" element={<Delete />} />
            <Route path="/postuser" element={<Post />} />
            <Route path="/updateuser/:id" element={<Update />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
// bara ata sagle route neet chaltaeet backend la neet request padtiee ka te baghaychaee ata 