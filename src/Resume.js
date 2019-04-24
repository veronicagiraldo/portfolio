import React from 'react';
// import resume from './images/resume2.png'
import { Document, Page } from 'react-pdf';
import './resume.css'
import resume from './images/webdev-resume-04-23-19.pdf';

class Resume extends React.Component {
  state = {
    file: {resume},
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="resumeContainer">
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
            
        </Document>
        {/* <p>Page {pageNumber} of {numPages}</p> */}
        <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A3c3a72ff-bdab-47a1-b701-c76afa0eb8ad" target="_blank">Download Resume</a>
      </div>
    );
  }
}
export default Resume

// class Resume extends React.Component{

//   render(){
//     return(
//       <div className="resContainer">
//       <div></div>
//       <h3>Resume</h3>
//         {/* <p>Click on link to view/download resume</p>
//         <Document file="webdev-resume-04-23-19.pdf" target="_blank"/>
      
//         <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A3c3a72ff-bdab-47a1-b701-c76afa0eb8ad">Download Resume</a>
//         <img className="responsive-img"src={resume} alt="resume"/>
      
//         <button></button> */}
        
        
//       </div>
//     )
//   }
  
// }
// export default Resume;