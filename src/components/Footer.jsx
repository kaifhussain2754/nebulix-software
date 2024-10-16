import React from 'react';
import './Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-row">
            {/* Logo Column */}
            <div className="footer-column logo-column">
              <img src="src/assets/nebulix.png" alt="Logo" className="footer-logo" /> {/* Logo */}
            </div>
            <div className="footer-column">
              <div className="newsletter">
                <h2>Subscribe to Our Newsletter</h2>
                <div className="newsletter-form">
                  <input className="newsletter-input" placeholder="Email here" />
                  <button className="newsletter-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-column">
              <div className="footer-about">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla a
                  consectetur dictum, metus elit hendrerit lectus, et venenatis elit dui nec lorem.
                </p>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-links">
                <h3>Useful Links</h3>
                <a href="/">Home</a>
                <a href="/aboutus">About</a>
                <a href="/services">Products & Services</a>
                <a href="#">Client Testimonials</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-contact">
                <h3>Get In Touch</h3>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Hyderabad, Telangana 500045
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i> +91 8008146642
                </p>
                <p>
                  <i className="fa fa-envelope"></i> abcd@example.com
                </p>
                <div className="footer-social">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="f-menu">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">Help</a>
            <a href="#">FAQs</a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-row">
            <div className="footer-column">
              <p>&copy; <a href="#">Nebulix Software</a>, All Rights Reserved.</p>
            </div>
            <div className="footer-column">
              <p>Developed & Maintained By <a href="#">Nebulix Software</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
