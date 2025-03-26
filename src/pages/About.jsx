import React from 'react';
import '../About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About ShopMart</h1>
        <p>Your trusted destination for quality products</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Story</h2>
          <p>Founded in 2024, ShopMart has grown to become one of the leading online retailers...</p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>We strive to provide the best shopping experience with quality products at competitive prices...</p>
        </div>

        <div className="about-card">
          <h2>Customer Service</h2>
          <p>Our dedicated support team is available 24/7 to assist you with any questions...</p>
        </div>
      </section>
    </div>
  );
};

export default About;