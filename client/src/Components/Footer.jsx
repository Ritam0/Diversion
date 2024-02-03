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
            <p>Email: contact@fusioni.com</p>
            <p>Phone: +91 9999668822</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Stay connected with us on social media for the latest updates and announcements.</p>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/ritam-majumder-krover/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Ritam0" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          </div>
          <div className="footer-section">
            <h4>Additional Links</h4>
            <div className="additional-links">
              <li><a href="https://www.linkedin.com/in/bibhab-mukhopadhyay-898303241/" target='_blank'>Linkdin</a></li>
              <li><a href="https://github.com/BIBHAB22" target='_blank'>Github</a></li>
             
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
  