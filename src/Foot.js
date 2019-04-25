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
           {/* <h5 class="white-text">Contact Information</h5>
           
           {/* <p class="">Veronica Giraldo</p> */}
           {/* <a href="vgiraldo.veronica@gmail.com" target="_blank">vgiraldo.veronica@gmail.com</a> */}
           {/* <a href = "mailto: vgiraldo.veronica@gmail.com">Send Email</a> */}
           
           {/* <p>801.634.9893</p>
           <p>Salt Lake City, UT</p>
           {/* <p>vgiraldo.veronica@gmail.com</p> */}
           {/* <a href="mailto:vgiraldo.veronica@gmail.com" target="_blank">vgiraldo.veronica@gmail.com</a>
           <a class="grey-text darken-2" href="https://www.linkedin.com/in/veronicagiraldo/"target="_blank"><i class="fab fa-linkedin"></i></a>
           <a class="grey-text darken-2" href="https://github.com/veronicagiraldo" target="_blank"><i class="fab fa-github"></i></a>
         </div>   */}
         
           <ul>
             <li><img class="vg" src={vg2} alt="vg"></img></li>
             <li><p>801.634.9893</p></li>
             <li><p>Salt Lake City, UT</p></li>
             <li><a href="mailto:vgiraldo.veronica@gmail.com" target="_blank" rel="noopener noreferrer">vgiraldo.veronica@gmail.com</a></li>
             {/* <li><a href="veronicagiraldoportfolio.com" target="_blank" rel="noopener noreferrer">my website</a></li> */}
             <li><a class="grey-text darken-2" href="https://www.linkedin.com/in/veronicagiraldo/"target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
             <li><a class="grey-text darken-2" href="https://github.com/veronicagiraldo" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
           </ul>
         </div>
         {/* <div class="col s12"> */}
           {/* <h5 class="white-text">Links</h5> */}
           {/* <ul>
             <li><a class="grey-text darken-2" href="https://www.linkedin.com/in/veronicagiraldo/"target="_blank"><i class="fab fa-linkedin"></i></a></li>
             <li><a class="grey-text darken-2" href="https://github.com/veronicagiraldo" target="_blank"><i class="fab fa-github"></i></a></li>
             <li><p>vgiraldo.veronica@gmail.com</p></li>
              {/* <li><a href="mailto:vgiraldo.veronica@gmail.com" target="_top">Send Mail</a></li> */}
              {/* <li><a href="mailto:vgiraldo.veronica@gmail.com" target="_blank">vgiraldo.veronica@gmail.com</a></li> */} 
             {/* <img class="vg" src={vg2} alt="vg"></img> */}
             {/* <li><img class="logo" src={logo} alt="logo"></img></li> */}
             {/* <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li> */}
             {/* <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
           {/* </ul> */}
         </div>
       </div>
   
     <div class="footer-copyright">
       <div class="container">
       Veronica Giraldo© 
       </div>
     </div>
   </footer>
  )
} 
export default Foot;