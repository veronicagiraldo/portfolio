import React from 'react';
import veronica from './images/veronica.svg'
import {Link} from 'react-router-dom';
const Home =() => {
 
  return(
    <div className="homeTitle">
     {/* <p> Veronica Giraldo </p> */}
     <img className="responsive-img"src={veronica} alt="veronica"/>
     <Link to ="/about"></Link>
     {/* <button onClick={() => <Link to="/about"></Link>}>Enter</button> */}
    </div>
    
  )
}

export default Home;