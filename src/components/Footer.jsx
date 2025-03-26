import React from 'react';
import '../Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://linkedin.com/in/nikita-ghimire-info" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/NikitaGhimire/my-shopping-cart.git" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://nikita.info.np" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <i className="fas fa-briefcase"></i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} ShopMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;