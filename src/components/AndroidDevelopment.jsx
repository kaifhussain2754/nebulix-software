import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaClipboardCheck } from 'react-icons/fa'; // Import icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicePage.css'; // Import your external CSS file

const AndroidDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <Helmet>
        <title>Android Development Services - Build Engaging Apps</title>
        <meta name="description" content="Create robust and user-friendly Android applications with our professional Android development services. Tailored solutions for your business." />
      </Helmet>
      <div className="row align-items-center" style={{ marginTop: '50px' }}>
        
        {/* Image Section */}
        <div className="col-md-4" data-aos="fade-right"> {/* Add AOS data attribute */}
          <img 
            src="./android.jpg" 
            alt="Android Development" 
            className="img-fluid rounded square-image" // Use the square-image class for 1:1 ratio
          />
        </div>
        
        {/* Content Section */}
        <div className="col-md-8 text-align-section" data-aos="fade-left"> {/* Add AOS data attribute */}
          <h2 className="mb-4">What is Android Development?</h2>
          <ul>
            <li>Creating mobile applications for the Android platform.</li>
            <li>Utilizing Java, Kotlin, and Android SDK for seamless app development.</li>
            <li>Ensuring responsive design and optimal performance on various devices.</li>
          </ul>

          <h2 className="mt-5 mb-4">How We Provide the Best Android Development</h2>
          <ul>
            <li>Custom app development tailored to your specific business needs.</li>
            <li>Thorough testing and quality assurance for bug-free applications.</li>
            <li>Post-launch support and updates to ensure app longevity.</li>
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

export default AndroidDevelopment;
