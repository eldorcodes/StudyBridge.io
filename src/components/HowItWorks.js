import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Create an Account',
    icon: '👤',
    description: 'Sign up in seconds to begin your U.S. study journey.',
  },
  {
    title: 'Upload Documents',
    icon: '📄',
    description: 'Submit passport, transcripts, and financial proof.',
  },
  {
    title: 'Make Payment',
    icon: '💳',
    description: 'Pay SEVIS & service fees using Stripe or PayPal.',
  },
  {
    title: 'Get I-20 & Interview',
    icon: '🎓',
    description: 'We issue your I-20 and schedule your visa interview.',
  },
];

const HowItWorks = () => (
  <section className="how-it-works" id="how-it-works">
    <h2>🔍 How It Works</h2>
    <div className="steps-grid">
      {steps.map((step, index) => (
        <div className="step-card" key={index}>
          <div className="icon">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;