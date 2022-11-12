import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import '../../styles/Portfolio.css';

import jate from '../../Images/jatescreenshot.png';
import nosql from '../../Images/nosqlscreenshot.png';
import goool from '../../Images/gooolscreenshot.png';
import readme from '../../Images/readmescreenshot.png';
import mysql from '../../Images/employeetrackerscreenshot.png';
import fitfood from '../../Images/fitfoodscreenshot.png';

function Portfolio() {

  // const techArray = ['JavaScript', 'Node.js', 'Webpack', 'IDB (IndexedDB API)', 'Express', 'Babel']
  const projectArray = [
    {
      id: 1,
      name: 'Text Editor PWA',
      screenshot: jate,
      deployment: 'https://bloodcurdling-citadel-38215.herokuapp.com/',
      githubLink: 'https://github.com/kentshaffer/pwa_text_editor_jate',
      techStack:
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Webpack</li>
          <li>IDB (IndexedDB API)</li>
          <li>Express</li>
          <li>Babel</li>
        </ul>
    },
    {
      id: 2,
      name: 'NoSQL Social Network API',
      screenshot: nosql,
      deployment: 'https://watch.screencastify.com/v/Q7s7704JF2KXaKCuMijH',
      githubLink: 'https://github.com/kentshaffer/nosql_social_network_api',
      techStack:
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Mongoose</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Insomnia</li>
        </ul>
    },
    {
      id: 3,
      name: '¡GOOOL!',
      screenshot: goool,
      deployment: 'https://secure-shore-30155.herokuapp.com/',
      githubLink: 'https://github.com/kentshaffer/Project-2',
      techStack:
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Handlebars.js</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>Express</li>
          <li>dotenv</li>
          <li>Luxon</li>
          <li>Canvas-Confetti</li>
        </ul>
    },
    {
      id: 4,
      name: 'Node.js Readme Generator',
      screenshot: readme,
      deployment: 'https://watch.screencastify.com/v/T12ivU6w7XIw3Ewxp72S',
      githubLink: 'https://github.com/kentshaffer/readme-generator',
      techStack:
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Inquirer</li>
        </ul>
    },
    {
      id: 5,
      name: 'MySQL Employee Tracker',
      screenshot: mysql,
      deployment: 'https://watch.screencastify.com/v/1LvWeXS5shUZ5VmkIfij',
      githubLink: 'https://github.com/kentshaffer/mysql_employee_tracker',
      techStack:
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Console.Table</li>
          <li>dotenv</li>
          <li>MySQL</li>
          <li>MySQL2</li>
        </ul>
    },
    {
      id: 6,
      name: 'Fit Food',
      screenshot: fitfood,
      deployment: 'https://kevinumayam.github.io/Fit-Food/',
      githubLink: 'https://github.com/KevinUmayam/Fit-Food',
      techStack:
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Skeleton (css framework)</li>
        </ul>
    }
  ];


  return (
    <div>
      {projectArray.map((item) => {
        return (
          <div className='projCard'>
            <Card className='cardLeft'>
              <Card.ImgOverlay className='imgContainer'>
                <Dropdown className='techDrop'>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Tech Stack
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>{item.techStack}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.ImgOverlay>
              <img className='cardImg' src={item.screenshot} alt={item.name} />
            </Card>
            <div className='cardRight'>
              <h4 className='projTitle'>{item.name}</h4>
              <div className='projBtns'>
                <a className='cardBtn'
                  target='_blank'
                  href={item.deployment}
                  rel="noreferrer" key={item.id}>
                  View Deployment
                </a>
                <a className='cardBtn'
                  target='_blank'
                  href={item.githubLink}
                  rel="noreferrer" key={item.title}>
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
}

export default Portfolio;