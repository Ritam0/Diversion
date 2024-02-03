import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const linkedInUrl = 'https://www.linkedin.com/company/fusioni';
const facebookUrl = 'https://www.facebook.com/FusionI/';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We are FusionI, your partner in intelligent automation. Explore our services and plans to elevate your business.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>Email: info@fusioni.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Stay connected with us on social media for the latest updates and announcements.</p>
            <div className="social-links">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          </div>
          <div className="footer-section">
            <h4>Additional Links</h4>
            <div className="additional-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQs</a></li>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FusionI. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  