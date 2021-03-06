import React from 'react';
import './about.css';
import v from './images/newV.jpg'
// import Nav from '/Nav';

const About = () => {
  return(
    <div className="aboutSection ">
      <h3 className="aboutTitle"><i class="fas fa-info-circle"></i>About</h3> 
    {/* <div class="row"> */}

      {/* <div class="col s12">This div is 12-columns wide on all screen sizes</div> */}
      <div class="col s12 center">  
      <div className="content show-on-medium-and-down">
      <div className="grid">
     
      <p>Hi, my name is Veronica Giraldo. I was born in New Jersey and raised in Salt Lake City, UT.  I enjoy the outdoors, hiking, yoga, snowboarding, live concerts, and being a foodie. I also love to meet new people and am an enthusiastic learner. In my schooling years, I graduated from the University of Utah with a Bachelor of Arts in International Studies with an emphasis on Italian language and a business minor. </p>
      <p>After graduating, I took a break from school and worked in the food and beverage industry as a server and bartender for a few years. During that time, I came across web development and taught myself the basics of HTML and CSS. After learning the basics, I decided to transition into the software sales, in the hope to grow my knowledge on web development.</p>
      <p>My journey to the MERN program has been one of the best decisions in my life so far. It has always been a passion of mine to help people and be creative; I am able to achieve my goals with web development. Whether it’s a passion piece or a useful tool for a friend, is my prerogative. At the end of the day, using the skills I’ve mastered to build a working demonstration of my growth is magical. </p>
      </div>

      {/* </div> */}
      <img className="v"src={v}alt="veronica"/>
      </div>
      </div>
      </div>
  
  )
}
export default About;