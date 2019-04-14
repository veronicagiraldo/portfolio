import React from 'react';
// import Button from '@material-ui/core/Button';
import veganEats from './images/VeganEats.png';
import veganMap from './images/veganEatsMap.png';
import veganContact from './images/veganContact.png';
import triviaHome from './images/triviaHome.png';
import triviaQ from './images/triviaQ.png';
import triviaAbout from './images/triviaAbout.png';
import gardenHome from './images/gardenHome.png';
import gardenPlay from './images/gardenPlay.png';
import gardenSeed from './images/gardenSeed.png';
import gardenPlant from './images/gardenPlant.png';
import gardenGreen from './images/gardenGreenhouse.png'


import './projects.css';

function Projects (){
    return(
      // <Button variant="contained" color="primary">
      //   Projects
      // </Button>
      <div className="projects">Projects
        <h6 className="projectTitle">Vegan:Eats!</h6>
        <a href="http://veganeats.surge.sh/">Vegan:Eats! website</a>
        <p>Created a website for vegetarians and vegans to dine out at local restarurants and grocery stores in downtown Salt Lake City, UT.</p>
        <p>Used React to create the front-end, and Google Maps is integrated to the application. </p>
        <img className="pic"src={veganEats} alt="veganeats"/>
        <img className="pic"src={veganMap} alt="veganmap"/>
        <img className="pic"src={veganContact} alt="vegancontact"/>
     <h6 className="projectTitle">Trivia Game</h6>
     <p>A CRUD single-page application built with React.</p>
      <p>Each trivia question is generated by using content delivered by the API.</p>
       <img className="pic"src={triviaHome} alt="trivia"/>
       <img className="pic"src={triviaQ} alt="trivia"/>
       <img className="pic"src={triviaAbout} alt="trivia"/>
   <h6 className="projectTitle">Garden Game</h6>
     <p>A CRUD single-page application built with React on the front-end.</p>
     <p>Used Node.js/Express as the back-end server and Mongoose and MongoDB for the database. </p>
      <p>A Learning game about gardening for children.</p>
       <img className="pic"src={gardenHome} alt="veganeats"/>
       <img className="pic"src={gardenPlay} alt="veganeats"/>
       <img className="pic"src={gardenSeed} alt="veganeats"/>
       <img className="pic"src={gardenPlant} alt="veganeats"/>
       <img className="pic"src={gardenGreen} alt="veganeats"/>
       </div>
   )
}
export default Projects;