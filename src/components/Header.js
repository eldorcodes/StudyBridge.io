import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Make sure logo is available

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="StudyBridge Logo" className="logo" />
        <span className="brand-name">StudyBridge</span>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Header;