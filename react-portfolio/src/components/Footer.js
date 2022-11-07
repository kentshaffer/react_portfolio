import React from 'react';
import '../styles/Footer.css';
import gitcat from '../Images/gitcat.png';
import linkedin from '../Images/linkedin.webp';
import stackoverflow from '../Images/stackoverflow.webp';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-item' id='github'>
        <a
          target='_blank'
          href='https://github.com/kentshaffer' rel="noreferrer">
          <img src={gitcat} alt='github cat logo' />
        </a>
      </div>

      <div className='footer-item' id='linkedin'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/kent-shaffer-2b26b795/' rel="noreferrer">
          <img src={linkedin} alt='linkedin logo' />
        </a>
      </div>

      <div className='footer-item' id='stackoverflow'>
        <a
          target='_blank'
          href='https://stackoverflow.com/users/20430563/kent' rel="noreferrer">
          <img src={stackoverflow} alt='stack overflow logo' />
        </a>
      </div>
    </div>
  )
}

export default Footer;