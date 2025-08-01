import React from 'react';
import './AppSection.css';

const AppSection = () => {
  return (
    <section id="download-app" className="app-section"> {/* Add id here */}
      <div className="app-section-container">
        <h2>📲 Download the StudyBridge App</h2>
        <p>
          Get started with your U.S. university application journey from your phone. Our app helps you upload documents, track progress, make payments, and receive notifications — all in one place.
        </p>
        <div className="app-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=io.studybridge.app"
            className="app-button android"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
          </a>
          <a
            href="https://apps.apple.com/us/app/studybridge/io.studybridge.app"
            className="app-button ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppSection;