import React from 'react';
import '../styles/Navbar.css'

const styles = {
  navTabs: {
    paddingBottom: '1%',
    borderStyle: 'none'
  }
}


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='header-div'>
      <h1 className='header-text'>Kent Shaffer</h1>
      <ul style={styles.navTabs} className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutMe"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >About Me</a>
        </li>

        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >Portfolio</a>
        </li>

        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</a>
        </li>

        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
