// src/components/Home.jsx
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Services from './Services'; // Import the Services component
import AboutUs from './AboutUs';
import './Home.css'; // Import external CSS for styles and media queries
import TestimonialCards from './Testimonial';
import TeamSlider from './TeamSlider';
import Footer from './Footer';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Container style={{ height: '100%' }}>
        <Row className="h-100 align-items-center"> {/* Center content vertically */}
          <Col md={6} xs={12} className="text-white p-4">
            <h1 className="display-3 display-sm-4 mb-4">
              Revolutionizing the Future of IT Solutions
            </h1>
            <p className="lead mb-1" style={{textAlign: 'justify'}}>
            Find out how to improve your visibility online and try out new ideas you might have never heard of before.
            Upgrade your commercial entity through innovative information technology and services.
            The team of specialists is focused on the customized approaches.
            Welcome to this revolution of IT strategies transformation, join us.
            </p>
            <Button variant="primary" className="btn-custom mt-3">
              Get Started
            </Button>
          </Col>
          <Col md={6} xs={12} className="d-flex justify-content-end">
            <img
              src="/src/assets/homeimage.png" // Replace with your illustration path
              alt="IT Solutions Illustration"
              className="hoveringImage img-fluid" // Apply the hovering image style
            />
          </Col>
        </Row>
      </Container>

      {/* Include the Services component here */}
      <Container className="services-container mt-5 mt-sm-3">
        <Services /> {/* Render the Services component */}
        <AboutUs />
        <TestimonialCards/>
      </Container>
      <Footer/>  
    </Container>
  );
};

export default Home;
