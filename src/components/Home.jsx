// src/components/Home.jsx
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Services from './Services';
import AboutUs from './AboutUs';
import './Home.css';
import TestimonialCards from './Testimonial';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-container" style={{ marginTop: '100px' }}> {/* Add top margin here */}
      <Container fluid>
        <Container style={{ height: '100%' }}>
          <Row className="h-100 align-items-center">
            <Col md={6} xs={12} className="text-white p-4">
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
                Get Started
              </Button>
            </Col>
            <Col md={6} xs={12} className="d-flex justify-content-end">
              <img
                src="/src/assets/homeimage.png"
                alt="IT Solutions Illustration"
                className="hoveringImage img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <Services />
        <AboutUs />
        <TestimonialCards />
      </Container>

      <Footer /> {/* Move Footer outside of the main container */}
    </div>
  );
};

export default Home;
