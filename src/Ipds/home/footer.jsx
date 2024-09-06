import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info.ipds.co.in</p>
          <p>Phone: +91 9549542771</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
          IPDS is a ICT solution provider dedicated to serving clients with businesses in any industry. We are committed to providing reliable and affordable ICT solutions. We understand that IT infrastructure is a critical part of the organization.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 IPDS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
