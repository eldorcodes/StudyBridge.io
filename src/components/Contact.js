import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-container">
      <h2>📬 Contact Us</h2>
      <p>If you have questions about studying in the U.S., we're here to help.</p>
      
      <div className="contact-details">
        <p><strong>📧 Email:</strong> support@studybridge.io</p>
        <p><strong>📍 Address:</strong> Tashkent, Uzbekistan</p>
        <p><strong>🌐 Website:</strong> <a href="https://studybridge.io" target="_blank" rel="noopener noreferrer">www.studybridge.io</a></p>
        <p><strong>📲 Telegram:</strong> <a href="https://t.me/studybridge_usa" target="_blank" rel="noopener noreferrer">@studybridge_usa</a></p>
      </div>

      <div className="contact-cta">
        <a href="https://t.me/StudyBridgeSupport" target="_blank" rel="noopener noreferrer" className="contact-button">
          💬 Chat on Telegram
        </a>
      </div>
    </div>
  </section>
);

export default Contact;