// src/components/AboutUs.jsx
import React, { useEffect } from 'react';
import './AboutUs.css'; // Import your custom CSS for additional styling
import AOS from 'aos'; // Import AOS for animation
import 'aos/dist/aos.css'; // Import AOS styles
import { FaRocket, FaHandshake, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import TeamSlider from './TeamSlider';
import { Helmet } from 'react-helmet'; // Import React Helmet

const AboutUs = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="container my-5">
      {/* React Helmet for SEO */}
      <Helmet>
        <meta name="description" content="Learn more about Nebulix Software, a leading provider of innovative software solutions. We are dedicated to empowering businesses with cutting-edge technology." />
        <meta name="keywords" content="Nebulix Software, Software Development, IT Solutions, Mission, Vision, Values" />
        <meta property="og:title" content="About Us - Nebulix Software" />
        <meta property="og:description" content="Discover Nebulix Software's mission, vision, and values. We provide innovative software solutions to help businesses grow and succeed." />
        <meta property="og:image" content="./aboutUs.png" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>

      <div className="row">
        <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000">
          <h2 style={{ color: 'white', marginTop: '50px' }}>About Nebulix Software</h2>
          <p style={{ textAlign: 'justify' }}>
            At Nebulix Software the name itself has a lot of essence as it means inspiration and innovation. The name “Nebulix” was obtained from the word “nebula” which refers to birth of stars and creativity plus the modern techno-commercial suffix “-ix” to depict our organisation’s focus on providing technologically advanced solution. Our team is a devoted software development provider offering unique web, application, and turn-key software solutions based on a client’s need.
          </p>

          <p style={{ textAlign: 'justify' }}>
            As a Nebulix Software Company, we anticipate that technology should be a part of everyday using in business and in the lives of individuals. Our mission statement implies that our software solutions shall solve existing problems as well as aid in growth and innovation. Our main aim and objective is to offer you the technological solutions and products we wish to have if we were in your shoes. Our corporate values include integrity, teamwork, commitment to excellence and customer care that shapes mutual and long term partnership between our company and customers. Actually being a tech enthusiast and dedicated to deliver quality work, Nebulix Software is ready to help you step into the future and transform creative concepts into powerful tools for success of your enterprise.
          </p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-left" data-aos-duration="1000">
          <img 
            src="./aboutUs.png" // Replace with your image path
            alt="About Us"
            className="hover-image" // Add your custom hover class here
            style={{ width: '80%', transition: 'transform 0.3s ease' }} // Responsive and smooth transition
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card mb-4" data-aos="fade-up" data-aos-duration="1000">
            <div className="card-body text-center">
              <FaRocket size={50} className="card-icon" />
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                At Nebulix Software, our mission is to empower businesses and individuals by providing innovative software solutions tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="card-body text-center">
              <FaHandshake size={50} className="card-icon" />
              <h3 className="card-title">Our Values</h3>
              <p className="card-text">
                We believe in integrity, collaboration, and continuous improvement, ensuring that our clients receive the best possible service and support.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="card-body text-center">
              <FaEye size={50} className="card-icon" />
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                Our vision is to create a world where technology enhances lives and empowers people to achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TeamSlider />
    </div>
  );
};

export default AboutUs;
