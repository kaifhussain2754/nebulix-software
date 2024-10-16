import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { SiWebstorm, SiAndroid, SiSketch, SiGooglecloud, SiAdobe, SiApple } from 'react-icons/si'; // Import icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import './Services.css'; // Import the external CSS file

// Updated services data
const servicesData = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites.',
    icon: <SiWebstorm className="icon" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications for iOS and Android.',
    icon: <SiAndroid className="icon" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces and experiences.',
    icon: <SiSketch className="icon" />,
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility on search engines.',
    icon: <SiGooglecloud className="icon" />,
  },
  {
    title: 'Graphic Design',
    description: 'Crafting visually stunning graphics and branding.',
    icon: <SiAdobe className="icon" />,
  },
  {
    title: 'Android Development',
    description: 'Developing native and hybrid apps for Android devices.',
    icon: <SiAndroid className="icon" />,
  },
  {
    title: 'iOS Development',
    description: 'Building sleek and powerful applications for iOS.',
    icon: <SiApple className="icon" />,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  return (
    <Container fluid className="py-5 section">
      <div className="backgroundImage" />
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h2 style={{ color: '#FFFFFF' }}>Tap More of Your Potential with Our Services!</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card
                className="hover-effect"
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} // Alternate animation direction
              >
                <Card.Body className="text-center">
                  {service.icon}
                  <Card.Title className="mt-3">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary" className='btn-custom'>Learn More</Button>
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
