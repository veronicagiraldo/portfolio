import React from 'react';
import './resume.css';
import challenge from './images/30day.jpg'

const Challenge =()=>{
  return(
    <div class="challenge">
    <div class="column">
    <img class="responsive-img"src={challenge} alt="30"/>
      {/* <a href="http://30challege.surge.sh/" >Check out my 30 day challenge using JavaScript</a> */}
   <a href="http://30challege.surge.sh/">Click to see website!</a>
   <p>A 30 day challenge using JavaScript </p>
     
    </div>
    </div>
  )
}

export default Challenge;