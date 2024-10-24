import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { SiWebstorm, SiAndroid, SiSketch, SiGooglecloud, SiAdobe, SiApple } from 'react-icons/si';
import { Link } from 'react-router-dom'; // Import Link for navigation
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import './Services.css';  // Import your CSS file

const servicesData = [
  { title: 'Web Development', description: 'Building responsive and high-performance websites.', icon: <SiWebstorm style={{ fontSize: window.innerWidth < 576 ? '2rem' : '3rem', color: '#FFFFFF' }} />, path: '/web' },
  { title: 'Mobile App Development', description: 'Creating cross-platform mobile applications for iOS and Android.', icon: <SiAndroid style={{ fontSize: window.innerWidth < 576 ? '2rem' : '3rem', color: '#FFFFFF' }} />, path: '/app' },
  { title: 'UI/UX Design', description: 'Designing user-friendly interfaces and experiences.', icon: <SiSketch style={{ fontSize: window.innerWidth < 576 ? '2rem' : '3rem', color: '#FFFFFF' }} />, path: '/uiux' },
  { title: 'SEO Optimization', description: 'Improving website visibility on search engines.', icon: <SiGooglecloud style={{ fontSize: window.innerWidth < 576 ? '2rem' : '3rem', color: '#FFFFFF' }} />, path: '/SEO' },
  { title: 'Graphic Design', description: 'Crafting visually stunning graphics and branding.', icon: <SiAdobe style={{ fontSize: window.innerWidth < 576 ? '2rem' : '3rem', color: '#FFFFFF' }} />, path: '/graphic' },
  { title: 'Android Development', description: 'Developing native and hybrid apps for Android devices.', icon: <SiAndroid style={{ fontSize: window.innerWidth < 576 ? '2rem' : '3rem', color: '#FFFFFF' }} />, path: '/android' },
  { title: 'iOS Development', description: 'Building sleek and powerful applications for iOS.', icon: <SiApple style={{ fontSize: window.innerWidth < 576 ? '2rem' : '3rem', color: '#FFFFFF' }} />, path: '/ios' },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid style={{ position: 'relative', padding: window.innerWidth < 576 ? '0' : '3rem', marginTop: '50px' }}>
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h2 style={{ color: '#FFFFFF', fontSize: window.innerWidth < 576 ? '1.5rem' : '2.5rem', fontWeight: 'bold' }}>
              Tap More of Your Potential with Our Services!
            </h2>
          </Col>
        </Row>
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card
                className="service-card"
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              >
                <Card.Body className="text-center">
                  {service.icon}
                  <Card.Title className="service-card-title">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="service-card-text">
                    {service.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Link to={service.path} className="btn service-button"> {/* Use Link for navigation */}
                    Learn More
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Services;
