// src/components/Home.jsx
import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Services from './Services';
import AboutUs from './AboutUs';
import './Home.css';
import TestimonialCards from './Testimonial';
import Footer from './Footer';
import StatsSection from './Stats';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Helmet } from 'react-helmet'; // Import React Helmet

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="home-container" style={{ marginTop: '100px' }}> {/* Add top margin here */}
      {/* React Helmet for SEO */}
      <Helmet>
        <meta name="description" content="Discover innovative IT solutions to enhance your online visibility and grow your business. Join the revolution in transforming IT strategies." />
        <meta name="keywords" content="IT Solutions, Information Technology, Business Growth, IT Services, Digital Transformation" />
        <meta property="og:title" content="Revolutionizing IT Solutions" />
        <meta property="og:description" content="Join us in revolutionizing IT solutions. Find out how to grow your business with innovative strategies and services." />
        <meta property="og:image" content="/./homeimage.png" />
      </Helmet>

      <Container fluid>
        <Container style={{ height: '100%' }}>
          <Row className="h-100 align-items-center">
            <Col md={6} xs={12} className="text-white p-4" data-aos="fade-right"> {/* Add AOS animation */}
              <h1 className="display-3 display-sm-4 mb-4">
                Revolutionizing the Future of IT Solutions
              </h1>
              <p className="lead mb-1" style={{ textAlign: 'justify' }}>
                Find out how to improve your visibility online and try out new ideas you might have never heard of before.
                Upgrade your commercial entity through innovative information technology and services.
                The team of specialists is focused on the customized approaches.
                Welcome to this revolution of IT strategies transformation, join us.
              </p>
              <Button variant="primary" className="btn-custom mt-3">
                <Link to="/getstarted" style={{ textDecoration: 'none', color: 'white' }}>
                  Get Started
                </Link>
              </Button>
            </Col>
            <Col md={6} xs={12} className="d-flex justify-content-end" data-aos="fade-left"> {/* Add AOS animation */}
              <img
                src="/./homeimage.png"
                alt="IT Solutions Illustration"
                className="hoveringImage img-fluid"
              />
            </Col>
          </Row>
        </Container>
        <StatsSection />
        <Services />
        <AboutUs />
        <TestimonialCards />
      </Container>

      <Footer /> {/* Move Footer outside of the main container */}
    </div>
  );
};

export default Home;
