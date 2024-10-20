import React, { useState } from 'react';
import './Footer.css'; // Ensure this path is correct
import SuccessModal from './SuccessModal'; // Import the SuccessModal component

const Footer = () => {
  const [email, setEmail] = useState(""); // State to hold the email input
  const [result, setResult] = useState(""); // State to hold submission result
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to control success modal

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state on input change
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setResult("Subscribing..."); // Update result message

    const formData = new FormData();
    formData.append("email", email);
    formData.append("access_key", "27db761f-1475-4069-9ec2-8eecf7ffe1e6"); // Your access key

    // Replace the URL with your newsletter subscription endpoint
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Successfully subscribed!"); // Update success message
      setShowSuccessModal(true); // Show the success modal
      setEmail(""); // Clear the email input
    } else {
      console.log("Error", data);
      setResult("Subscription failed. Please try again."); // Update error message
    }
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-row">
            {/* Logo Column */}
            <div className="footer-column logo-column">
              <img src="./nebulix.png" alt="Logo" className="footer-logo" /> {/* Logo */}
            </div>
            <div className="footer-column">
              <div className="newsletter">
                <h2>Subscribe to Our Newsletter</h2>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Email here"
                    value={email}
                    onChange={handleEmailChange} // Update email on input change
                    required
                  />
                  <button type="submit" className="newsletter-btn">Submit</button>
                </form>
                {result && <p>{result}</p>} {/* Show submission result */}
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-column">
              <div className="footer-about">
                <h3>About Us</h3>
                <p style={{ textAlign: 'justify' }}>
                  Our mission at Nebulix Software is to provide unique and proper software based on ideas and technological achievements. How we strive to help: Our mission at DashThis is to provide businesses with tools to grow and overcome existing dilemmas. Nebulix delivers professionalism by upholding its core values of integrity and provision of excellent services for continuous and long-term business relationships that turn noble concepts into realities by developing innovative ideas into valuable digital applications.
                </p>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-links">
                <h3>Useful Links</h3>
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                <a href="pricing">Pricing</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-contact">
                <h3>Get In Touch</h3>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Udaipur, Rajasthan 313001
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i> +91 6376769600
                </p>
                <p>
                  <i className="fa fa-envelope"></i> admin@nebulixsoftware.com
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

      {/* Success Modal */}
      <SuccessModal
        showModal={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="You have successfully subscribed to the newsletter!"
      />
    </div>
  );
};

export default Footer;
