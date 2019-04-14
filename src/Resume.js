import React from 'react';
import resume from './images/resume2.png'

class Resume extends React.Component{
  render(){
    return(
      <div className="resContainer">
        <img className="responsive-img"src={resume} alt="resume"/>
      </div>
    )
  }
  
}
export default Resume;