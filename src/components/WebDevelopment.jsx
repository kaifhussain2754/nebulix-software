import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaClipboardCheck } from 'react-icons/fa'; // Import icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicePage.css'; // Import your external CSS file

const WebDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <div className="row align-items-center" style={{ marginTop: '50px' }}>
        
        {/* Image Section */}
        <div className="col-md-4" data-aos="fade-right"> {/* Add AOS data attribute */}
          <img 
            src="./web-development.jpg" 
            alt="Web Development" 
            className="img-fluid rounded square-image" // Use the square-image class for 1:1 ratio
          />
        </div>
        
        {/* Content Section */}
        <div className="col-md-8 text-align-section" data-aos="fade-left"> {/* Add AOS data attribute */}
          <h2 className="mb-4">What is Web Development?</h2>
          <ul>
            <li>Building responsive and dynamic websites using the latest technologies.</li>
            <li>Creating seamless user experiences with efficient back-end development.</li>
            <li>Integrating databases and APIs to deliver powerful web functionalities.</li>
          </ul>

          <h2 className="mt-5 mb-4">How We Provide the Best Development</h2>
          <ul>
            <li>Tailored solutions that match your business goals and brand.</li>
            <li>Highly skilled developers with experience in multiple tech stacks.</li>
            <li>Ongoing support and maintenance for future-proof web solutions.</li>
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

export default WebDevelopment;
