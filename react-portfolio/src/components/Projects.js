import React from 'react';
import Portfolio from './pages/portfolio'


const projectArray = [
  {
    id: 1,
    name: 'Text Editor PWA',
    screenshot: 'jate',
    deployment: 'https://bloodcurdling-citadel-38215.herokuapp.com/',
    githubLink: 'https://github.com/kentshaffer/pwa_text_editor_jate',
  },
  {
    id: 2,
    name: 'NoSQL Social Network API',
    screenshot: 'nosql',
    deployment: 'https://watch.screencastify.com/v/Q7s7704JF2KXaKCuMijH',
    githubLink: 'https://github.com/kentshaffer/nosql_social_network_api',
  },
  {
    id: 3,
    name: '¡GOOOL!',
    screenshot: 'goool',
    deployment: 'https://secure-shore-30155.herokuapp.com/',
    githubLink: 'https://github.com/kentshaffer/Project-2',
  },
  {
    id: 4,
    name: 'Node.js Readme Generator',
    screenshot: 'readme',
    deployment: 'https://watch.screencastify.com/v/T12ivU6w7XIw3Ewxp72S',
    githubLink: 'https://github.com/kentshaffer/readme-generator',
  },
  {
    id: 5,
    name: 'MySQL Employee Tracker',
    screenshot: 'mysql',
    deployment: 'https://watch.screencastify.com/v/1LvWeXS5shUZ5VmkIfij',
    githubLink: 'https://github.com/kentshaffer/mysql_employee_tracker',
  },
  {
    id: 6,
    name: 'Fit Food',
    screenshot: 'fitfood',
    deployment: 'https://kevinumayam.github.io/Fit-Food/',
    githubLink: 'https://github.com/KevinUmayam/Fit-Food',
  }
];

function Projects() {
  return <Portfolio projectArray={projectArray} />
}

export default Projects;