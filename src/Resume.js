import React from 'react';
// import resume from './images/resume2.png'
import { Document, Page } from 'react-pdf';
import './resume.css'
import {resume} from './images/software-veronica-4-24-29.pdf'
// import Frame from './Frame';

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
         
        {/* <iframe src="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A832c697d-4209-4562-a013-eaf748fb5e85" height="200" width="300"></iframe> */}
        {/* <iframe src="https://docs.google.com/gview?url=https:https://drive.google.com/drive/u/0/my-drive&embedded=true" style="width:600px; height:500px;" frameborder="0"></iframe> */}
       
        {/* <iframe src="" style="width:600px; height:500px;" frameborder="0"></iframe> */}
        
        
        <button><a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:832c697d-4209-4562-a013-eaf748fb5e85" target="_blank" rel="noopener noreferrer">Download Resume</a></button>
        <button><a href="https://drive.google.com/file/d/1sMzmmk3Z9xLveEaBSrGqUtMXAGq_dBqk/view" target="_blank" rel="noopener noreferrer">Download Resume</a></button>
        
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