import React from 'react';
import myResume from '../../Images/Resume.pdf'
import '../../styles/Contact.css';


export default function Resume() {
  return (
    <div>
      <div id='btnContainer'>
        <div id='headerBox'>
          <h1 id='headerText'>Resume</h1>
        </div>
        <div id='btnBox'>
          <a id='resumeBtn' href={myResume} download>Click To Download My Resume</a>
        </div>
      </div>
    </div>
  );
}
