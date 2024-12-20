import './Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-row">
            {/* Logo Column */}
            <div className="footer-column logo-column">
              <img src="./nebulix.png" alt="Logo" className="footer-logo" /> {/* Logo */}
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
              <a href="/pricing">Pricing</a>
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
                <i className="fa fa-envelope"></i> nebulixsoftware@gmail.com
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/nebulixsoftware/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/nebulixsoftware/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* New Government Certified Section */}
        <div className="footer-row">
          <div className="footer-column" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#ff9800' }}>
              <img
                src="/certificate.png" // Replace with the actual path to your certificate icon image
                alt="Government Certified"
                style={{ width: '30px', height: '30px', marginRight: '8px' }} // Adjust the size as needed
              />
              Government Certified
            </h3>
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
  );
}

export default Footer;
