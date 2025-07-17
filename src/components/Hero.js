import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>📚 Study in the USA with Confidence</h1>
      <p>
        StudyBridge helps Uzbek students apply to U.S. colleges and secure their F-1 visas effortlessly.
        From document uploads to visa interview prep — we support you every step of the way.
      </p>

      <div className="hero-buttons">
        <a href="#download-app" className="btn primary">Get Started</a>
        <a href="#download-app" className="btn secondary">Download the App</a>
      </div>
    </div>
  </section>
);

export default Hero;