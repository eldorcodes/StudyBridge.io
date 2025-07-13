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
        <p><strong>🌐 Website:</strong> <a href="https://studybridge.io">www.studybridge.io</a></p>
      </div>

      <div className="contact-cta">
        <a href="mailto:support@studybridge.io" className="contact-button">Send Email</a>
      </div>
    </div>
  </section>
);

export default Contact;