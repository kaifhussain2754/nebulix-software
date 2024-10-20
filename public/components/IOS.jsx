import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaClipboardCheck } from 'react-icons/fa'; // Import icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicePage.css'; // Import your external CSS file

const IOSDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <Helmet>
        <title>iOS Development Services - Build Innovative Apps</title>
        <meta name="description" content="Develop high-quality iOS applications with our professional iOS development services. Tailored solutions to meet your business needs." />
      </Helmet>
      <div className="row align-items-center" style={{ marginTop: '50px' }}>
        
        {/* Image Section */}
        <div className="col-md-4" data-aos="fade-right"> {/* Add AOS data attribute */}
          <img 
            src="./ios.jpg" 
            alt="iOS Development" 
            className="img-fluid rounded square-image" // Use the square-image class for 1:1 ratio
          />
        </div>
        
        {/* Content Section */}
        <div className="col-md-8 text-align-section" data-aos="fade-left"> {/* Add AOS data attribute */}
          <h2 className="mb-4">What is iOS Development?</h2>
          <ul>
            <li>Creating mobile applications for the iOS platform.</li>
            <li>Utilizing Swift and Objective-C for robust app development.</li>
            <li>Ensuring compliance with Apple’s guidelines for optimal performance.</li>
          </ul>

          <h2 className="mt-5 mb-4">How We Provide the Best iOS Development</h2>
          <ul>
            <li>Custom app development tailored to your unique business requirements.</li>
            <li>Thorough testing and quality assurance for a seamless user experience.</li>
            <li>Ongoing support and maintenance post-launch to keep your app up to date.</li>
          </ul>

          <div className="button-container mt-4" data-aos="fade-up"> {/* Add AOS data attribute */}
            <Link to="/pricing" className="btn btn-outline-light me-3">
              <FaDollarSign className="me-2" /> Check Pricing
            </Link>
            <Link to="/getstarted" className="btn btn-outline-light">
              <FaClipboardCheck className="me-2" /> Book Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSDevelopment;
