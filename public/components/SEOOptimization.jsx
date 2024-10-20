import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaClipboardCheck } from 'react-icons/fa'; // Import icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicePage.css'; // Import your external CSS file

const SEOOptimization = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <Helmet>
        <title>SEO Optimization Services - Boost Your Visibility</title>
        <meta name="description" content="Enhance your online presence with our SEO optimization services. Improve your website's ranking and attract more visitors with tailored strategies." />
      </Helmet>
      <div className="row align-items-center" style={{ marginTop: '50px' }}>
        
        {/* Image Section */}
        <div className="col-md-4" data-aos="fade-right"> {/* Add AOS data attribute */}
          <img 
            src="./SEO.jpg" 
            alt="SEO Optimization" 
            className="img-fluid rounded square-image" // Use the square-image class for 1:1 ratio
          />
        </div>
        
        {/* Content Section */}
        <div className="col-md-8 text-align-section" data-aos="fade-left"> {/* Add AOS data attribute */}
          <h2 className="mb-4">What is SEO Optimization?</h2>
          <ul>
            <li>Improving website visibility in search engine results pages (SERPs).</li>
            <li>Enhancing site structure and content for better user experience.</li>
            <li>Utilizing keyword research and analytics to drive targeted traffic.</li>
          </ul>

          <h2 className="mt-5 mb-4">How We Provide the Best SEO Optimization</h2>
          <ul>
            <li>Custom SEO strategies tailored to your business goals.</li>
            <li>Thorough website audits to identify areas for improvement.</li>
            <li>Ongoing monitoring and adjustments to maintain high rankings.</li>
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

export default SEOOptimization;
