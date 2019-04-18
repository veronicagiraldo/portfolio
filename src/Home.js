import React from 'react';
// import veronica from './images/veronica.svg'
// import vkeyboard from './images/vkeyboard.png';
import vron from './images/vron.png';
import keyboard from './images/keyboard.jpg';
import {Link} from 'react-router-dom';
import './home.css';


const Home =() => {
 
  return(
    <div className="homeContainer">
    <h1 className="name">Veronica Giraldo</h1>
    <h3 className="name">Full Stack Developer</h3>
    <Link className="linkProjects"to="/projects" >Welcome</Link>
    
     {/* <img class="keyboard"src={keyboard} alt="key"/> */}
     {/* <img className="responsive-img"src={veronica} alt="veronica"/> */}
     {/* <img className="responsive-img"src={vron} alt="veronica"/> */}
    </div>
  )
}

export default Home;