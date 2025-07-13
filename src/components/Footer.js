import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} StudyBridge LLC. All rights reserved.
    </p>
    <div>
      <a href="https://studybridge.io/terms" target="_blank" rel="noopener noreferrer">Terms</a>
      <a href="https://studybridge.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      <a href="https://studybridge.io/eula" target="_blank" rel="noopener noreferrer">EULA</a>
    </div>
  </footer>
);

export default Footer;