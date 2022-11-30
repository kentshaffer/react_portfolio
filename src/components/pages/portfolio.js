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
import instafood from '../../Images/instafoodscreenshot.png'

const styles = {
  btn: {
    backgroundColor: 'rgb(38, 42, 45, 1)',
    color: 'white'
  }
}

function Portfolio() {

  const projectArray = [
    {
      id: 7,
      name: 'Instafood',
      screenshot: instafood,
      deployment: 'https://frozen-chamber-50604.herokuapp.com/',
      githubLink: 'https://github.com/CMolitor96/instacook',
      description: 'Instacook is a recipe sharing app. It features user authentication for users to save a collection of their own created/shared recipes,  as well as delete their own posts if needed. Shared recipes are public and anyone with an account can access posted recipes.',
      techStack:
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React-Bootstrap</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GraphQL</li>
          <li>Apollo-Server</li>
          <li>MongoDB/Mongoose</li>
          <li>JWT</li>
          <li>Bcrypt</li>
          <li>Heroku</li>
        </ul>
    },
    {
      id: 6,
      name: 'Text Editor PWA',
      screenshot: jate,
      deployment: 'https://bloodcurdling-citadel-38215.herokuapp.com/',
      githubLink: 'https://github.com/kentshaffer/pwa_text_editor_jate',
      description: 'Single page Progressive Web App (PWA) that runs in the browser. Application meets PWA criteria and caches data, so it is functional offline.',
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
      id: 5,
      name: 'NoSQL Social Network API',
      screenshot: nosql,
      deployment: 'https://watch.screencastify.com/v/Q7s7704JF2KXaKCuMijH',
      githubLink: 'https://github.com/kentshaffer/nosql_social_network_api',
      description: 'Back-end build for a social network app. Users can create new users, view all users, view one user, update user, and delete user. Users can connect and become friends with other users, delete friends, post thoughts, edit thoughts, delete thoughts, as well as post reactions to thoughts and delete reactions.',
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
      id: 4,
      name: '¡GOOOL!',
      screenshot: goool,
      deployment: 'https://secure-shore-30155.herokuapp.com/',
      githubLink: 'https://github.com/kentshaffer/Project-2',
      description: 'Goool is a full-stack goal-tracking app built with Node, Express, Handlebars.js, and MySQL. It features user authentication for personalized goal tracking, alongside a time tracker for long-term goal maintenance. Completed goals are stored in the database so users can look back on their progress and feel proud of their success!',
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
      id: 3,
      name: 'Readme Generator',
      screenshot: readme,
      deployment: 'https://watch.screencastify.com/v/T12ivU6w7XIw3Ewxp72S',
      githubLink: 'https://github.com/kentshaffer/readme-generator',
      description: 'The Readme Generator is a node.js driven application that generates a readme.md file, operated from the command line. Question prompts in the app are recorded using the Inquirer package. Answered questions populate a skeleton framework, which is then written into a readme.md file upon completion of the command line questions with fs.writeFile',
      techStack:
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Inquirer</li>
        </ul>
    },
    {
      id: 2,
      name: 'MySQL Employee Tracker',
      screenshot: mysql,
      deployment: 'https://watch.screencastify.com/v/1LvWeXS5shUZ5VmkIfij',
      githubLink: 'https://github.com/kentshaffer/mysql_employee_tracker',
      description: 'Command line app, powered by node.js to run a MySQL database. Users are able to seed data from the seeds.sql file and then view or add to the department, employee_role, and employee tables, as well as update employee roles within the application.',
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
      id: 1,
      name: 'Fit Food',
      screenshot: fitfood,
      deployment: 'https://kevinumayam.github.io/Fit-Food/',
      githubLink: 'https://github.com/KevinUmayam/Fit-Food',
      description: 'Fitfood is a web application that allows users to create customized meal and workout plans. Users will be able to access the Edamam API with over 2,000,000 recipes to create customized meal plans according to their dietary and workout needs, as well as create customized workout plans tailored to specific muscle groups.',
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
    <div className='projContainer'>
      {projectArray.map((item) => {
        return (
          <div className='projCard'>
            <Card className='cardLeft'>
              <img className='cardImg' src={item.screenshot} alt={item.name} />
            </Card>
            <div className='cardRight'>
              <div id='cardHeader'>
                <h4 className='projTitle'>{item.name}</h4>
                <Dropdown className='techDrop'>
                    <Dropdown.Toggle className='dropBtn' style={styles.btn} variant="secondary" id="dropdown-basic">
                      Tech Stack
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='techList'>
                      <Dropdown.Item>{item.techStack}</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </div>  
              <p className='desc'>{item.description}</p>
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