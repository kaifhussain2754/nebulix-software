import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaClipboardCheck } from 'react-icons/fa'; // Import icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicePage.css'; // Import your external CSS file

const GraphicDesign = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <Helmet>
        <title>Graphic Design Services - Create Stunning Visuals</title>
        <meta name="description" content="Transform your brand with our graphic design services. From logos to marketing materials, we create stunning visuals that communicate your message." />
      </Helmet>
      <div className="row align-items-center" style={{ marginTop: '50px' }}>
        
        {/* Image Section */}
        <div className="col-md-4" data-aos="fade-right"> {/* Add AOS data attribute */}
          <img 
            src="./Graphic.jpg" 
            alt="Graphic Design" 
            className="img-fluid rounded square-image" // Use the square-image class for 1:1 ratio
          />
        </div>
        
        {/* Content Section */}
        <div className="col-md-8 text-align-section" data-aos="fade-left"> {/* Add AOS data attribute */}
          <h2 className="mb-4">What is Graphic Design?</h2>
          <ul>
            <li>Creating visual content to communicate messages and ideas.</li>
            <li>Designing logos, brochures, and marketing materials that resonate with audiences.</li>
            <li>Utilizing color, typography, and imagery to enhance brand identity.</li>
          </ul>

          <h2 className="mt-5 mb-4">How We Provide the Best Graphic Design</h2>
          <ul>
            <li>Custom designs tailored to your brand’s vision and goals.</li>
            <li>Collaborative approach with ongoing feedback to ensure satisfaction.</li>
            <li>Timely delivery of high-quality design assets for all your needs.</li>
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

export default GraphicDesign;
