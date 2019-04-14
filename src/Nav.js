import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import vg2 from './images/vg2.svg';
import {Navbar} from 'react-materialize';

// import About from './About';
// import NavItem2 from './Resume';

const Nav = () => {

    return(
      // <Navbar brand={"/images/vg2.svg"} alignLinks="right">
      //     <ul>
      //       <li><Link to="/home">HOME</Link></li>
      //       <li><Link to="/projects">PROJECTS</Link></li>
      //       <li><Link to="/resume">RESUME</Link></li>
      //       <li><Link to="/about">ABOUT</Link></li>
      //     </ul>
      // </Navbar>
      <Navbar class="nav-wrapper">
            
            <img class="vg center" src={vg2} alt="vg"></img>
            {/* <a href="#"img src="portfolio/src/images/vg2.svg" class="brand-logo center">Logo</a> */}
            {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
            <ul class="center">
            {/* <ul id="nav-mobile" class="left hide-on-med-and-down"> */}
             <li> <Link to="/">Home</Link></li>
             <li><Link to="/projects">Projects</Link></li>
             <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/about">About Me</Link></li>
            </ul>

    </Navbar>
    )
}
export default Nav;