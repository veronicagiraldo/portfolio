import React from 'react';
// import {Footer} from 'react-materialize';
import './foot.css';
// import vg from './images/vg.svg';
import vg2 from './images/vg2.svg'
// import logo from '/Users/veronicagiraldo/dev/assignments/exercises/portfolio/portfolio/src/images/VG.png'

const Foot = () => {
  return(
    // <div className="footerContainer">
    //   <a href="">linkedin</a>
    //   <a href="">github</a>
    // </div>
     <footer class="page-footer">
     <div class="container">
       <div class="row">
         <div class="col s12">
           {/* <h5 class="white-text">Contact Information</h5> */}
           <img class="vg" src={vg2} alt="vg"></img>
           {/* <p class="">Veronica Giraldo</p> */}
           <p>vgiraldo.veronica@gmail.com</p>
           <p>801.634.9893</p>
           <p>Salt Lake City, UT</p>
         </div>
         <div class="col s12">
           {/* <h5 class="white-text">Links</h5> */}
           <ul>
             <li><a class="grey-text text-lighten-2" href="https://www.linkedin.com/in/veronicagiraldo"><i class="fab fa-linkedin"></i></a></li>
             <li><a class="grey-text text-lighten-2" href="https://github.com/veronicagiraldo"><i class="fab fa-github"></i></a></li>
             {/* <img class="vg" src={vg2} alt="vg"></img> */}
             {/* <li><img class="logo" src={logo} alt="logo"></img></li> */}
             {/* <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li> */}
             {/* <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
           </ul>
         </div>
       </div>
     </div>
     <div class="footer-copyright">
       <div class="container">
      Veronica Giraldo © 2019 Copyright Text
       {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
       </div>
     </div>
   </footer>
  )
} 
export default Foot;