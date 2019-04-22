import React from 'react';
// import veronica from './images/veronica.svg'
// import vkeyboard from './images/vkeyboard.png';
// import vron from './images/vron.png';
// import keyboard from './images/keyboard.jpg';
import {Link} from 'react-router-dom';
import './home.css';


const Home =() => {
 
  return(
    <div className="homeContainer">
    <h1 className="name">Veronica Giraldo</h1>
    <h3 className="nameFull">Full Stack Developer</h3>
    <Link className="linkProjects"to="/projects" ><i class="fas fa-sign-in-alt"></i></Link>
   
    </div>
 

    
    /* <img className="responsive-img"src={vron} alt="veronica"/> */
     /* <a class="center" href="https://www.linkedin.com/in/veronicagiraldo/"><i class="fab fa-linkedin"></i></a>
    <a class="center" href="https://github.com/veronicagiraldo"><i class="fab fa-github"></i></a> */
 
  )
}

export default Home;