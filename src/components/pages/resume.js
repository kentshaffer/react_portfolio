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
      <div id='printedResume'>
        <ul>
          <h4>Front-End Proficiencies</h4>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>Handlebars.js</li>
          <li>Responsive Design</li>
        </ul>
        <ul>
          <h4>Back-End Proficiencies</h4>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>GraphQL</li>
          <li>API Structures</li>
        </ul>
      </div>
    </div>
  );
}
