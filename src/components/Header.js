// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="StudyBridge Logo" className="logo" />
          <span className="brand-name">StudyBridge</span>
        </Link>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
        <a href="#download-app" onClick={() => setMenuOpen(false)}>Download App</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
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