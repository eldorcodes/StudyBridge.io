import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      quote: '“StudyBridge helped me get accepted and schedule my U.S. visa interview with ease.”',
      name: 'Malika T.',
      location: 'Tashkent',
    },
    {
      quote: '“Everything was smooth — document upload, SEVIS fee, and I-20 received quickly!”',
      name: 'Sanjar K.',
      location: 'Namangan',
    },
    {
      quote: '“Best support ever. The team guided me step by step till my F-1 visa was approved!”',
      name: 'Dilshod M.',
      location: 'Samarkand',
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>🎓 What Our Students Say</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <p className="quote">{review.quote}</p>
            <div className="stars">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <h4>
              — <span className="name">{review.name}</span>, <span className="location">{review.location}</span>
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;