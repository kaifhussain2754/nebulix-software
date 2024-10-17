import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { SiWebstorm, SiAndroid, SiSketch, SiGooglecloud, SiAdobe, SiApple } from 'react-icons/si';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const servicesData = [
  { title: 'Web Development', description: 'Building responsive and high-performance websites.', icon: <SiWebstorm style={{ fontSize: '3rem', color: '#FFFFFF' }} /> },
  { title: 'Mobile App Development', description: 'Creating cross-platform mobile applications for iOS and Android.', icon: <SiAndroid style={{ fontSize: '3rem', color: '#FFFFFF' }} /> },
  { title: 'UI/UX Design', description: 'Designing user-friendly interfaces and experiences.', icon: <SiSketch style={{ fontSize: '3rem', color: '#FFFFFF' }} /> },
  { title: 'SEO Optimization', description: 'Improving website visibility on search engines.', icon: <SiGooglecloud style={{ fontSize: '3rem', color: '#FFFFFF' }} /> },
  { title: 'Graphic Design', description: 'Crafting visually stunning graphics and branding.', icon: <SiAdobe style={{ fontSize: '3rem', color: '#FFFFFF' }} /> },
  { title: 'Android Development', description: 'Developing native and hybrid apps for Android devices.', icon: <SiAndroid style={{ fontSize: '3rem', color: '#FFFFFF' }} /> },
  { title: 'iOS Development', description: 'Building sleek and powerful applications for iOS.', icon: <SiApple style={{ fontSize: '3rem', color: '#FFFFFF' }} /> },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container fluid style={{ position: 'relative', padding: '3rem', marginTop: '50px' }}>
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h2 style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: 'bold' }}>Tap More of Your Potential with Our Services!</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card
                style={{
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 4px 15px rgba(128, 0, 128, 0.3)',
                }}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              >
                <Card.Body className="text-center">
                  {service.icon}
                  <Card.Title style={{ color: '#FFFFFF', fontSize: '1.5rem', marginTop: '15px', fontWeight: 'bold' }}>{service.title}</Card.Title>
                  <Card.Text style={{ color: '#CCCCCC', fontSize: '1rem' }}>{service.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button
                    style={{
                      backgroundColor: '#000000',
                      border: 'none',
                      borderRadius: '15px',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontWeight: '600',
                      padding: '12px 24px',
                      width: '100%',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#111111')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#000000')}
                  >
                    Learn More
                  </Button>
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
