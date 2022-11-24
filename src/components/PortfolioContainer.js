import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutMe from './pages/about-me';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Resume');

  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
