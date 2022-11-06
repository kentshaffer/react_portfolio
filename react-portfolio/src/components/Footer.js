import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <ul className='footer'>
      <li className='footer-item' id='github'>
        <a
        target='_blank'
        href='https://github.com/kentshaffer' rel="noreferrer">
          <img src='../../githubcat.png' alt='github cat logo'/>
        </a>
      </li>

      <li className='footer-item' id='linkedin'>
        <a
        target='_blank'
        href='https://www.linkedin.com/in/kent-shaffer-2b26b795/' rel="noreferrer">
          <img src='../../linkedin.webp' alt='linkedin logo'/>
        </a>
      </li>

      <li className='footer-item' id='stackoverflow'>
        <a
        target='_blank'
        href='https://stackoverflow.com/users/20430563/kent' rel="noreferrer">
          <img src='../../stackoverflow.webp' alt='stack overflow logo'/>
        </a>
      </li>
    </ul>
  )
}

export default Footer;