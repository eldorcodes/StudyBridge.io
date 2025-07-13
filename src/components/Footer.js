import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} StudyBridge LLC. All rights reserved.
    </p>
    <div>
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/eula">EULA</Link>
    </div>
  </footer>
);

export default Footer;