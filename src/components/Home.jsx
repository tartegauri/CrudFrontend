import React from "react";
import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.heading}>
        <h1>Create</h1>
        <h1>Read</h1>
        <h1>Update</h1>
        <h1>Delete</h1>
      </div>
      <div className={styles.container}>
        <div></div>
        <div>
          <h1>About My Project</h1>
          <p>
          🚀 Welcome to my User Management System, a dynamic web application that reflects my profound understanding and fervor for web development. This project is the embodiment of my expertise in contemporary web technologies, harnessing the potent combination of Express, Node.js, React.js, and PostgreSQL to create an integrated and sophisticated system. 🤓<br/>

💡 At its core, this system empowers users to perform the foundational CRUD operations – Create, Read, Update, and Delete – on a meticulously organized list of users. It's as though I've harnessed the forces of the web universe and condensed them into a user-friendly interface. The 'Create' functionality simplifies user addition, making it as effortless as filling in details and clicking a button – it's like performing digital alchemy! ✨ 'Read' provides an intuitive and visually appealing interface driven by React.js, delivering information with elegance and precision. For 'Update,' it's like being in a workshop, refining user details with ease, and watching them instantly synchronize with the database – it's web development artistry! Deleting a user record is a breeze with the 'Delete' feature, as simple as flicking a switch.
<br/>
🖥️ On the frontend, the project boasts an engaging user interface created using React.js and enhanced with custom CSS, ensuring a captivating and responsive user experience. The backend, powered by Express and Node.js, orchestrates the symphony of data requests, authentication, and seamless database interactions. PostgreSQL acts as the trusted vault, safeguarding data with unwavering precision.
<br/>
This User Management System is a testament to my proficiency and a canvas for my future endeavors. Beyond that, it reflects my ardor for web development, ensuring a user-friendly, efficient, and enchanting experience. Thank you for delving into my User Management System – a glimpse into the fascinating world of web development! 🌟💻🚀
          </p>
          <div>
            <button>
              <Link to="/getuser">Get All Users</Link>
            </button>
            <button>
              <Link to="/postuser"> Create A User</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
