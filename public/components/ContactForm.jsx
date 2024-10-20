// src/ContactForm.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#1a1a1a', // Dark background
      color: '#f5f5f5', // Light text color
    },
    card: {
      backgroundColor: '#2a2a2a', // Dark card background
      padding: '2rem', // Increased padding
      borderRadius: '5px',
      border: '1px solid #444',
    },
    leftImg: {
      width: '100%',
      objectFit: 'cover',
      transform: 'scale(2.3)',
    },
    icon: {
      marginRight: '10px',
      color: '#f5f5f5', // Icon color
    },
  };

  return (
    <Container fluid style={styles.container}>
      <div style={styles.card}>
        <Row className="g-4">
          <Col md={6} className="d-none d-md-block">
            
          </Col>
          <Col md={6}>
            <h2>Contact Us</h2>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  style={{ background: 'none', color: '#f5f5f5', border: 'none', borderBottom: '2px solid #f5f5f5' }}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ background: 'none', color: '#f5f5f5', border: 'none', borderBottom: '2px solid #f5f5f5' }}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  style={{ background: 'none', color: '#f5f5f5', border: 'none', borderBottom: '2px solid #f5f5f5' }}
                  required
                />
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                style={{
                  backgroundColor: '#f25',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  border: 'none',
                  width: 'min-content',
                  padding: '15px',
                  marginTop: '10px',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#f45')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#f25')}
              >
                Contact Us
              </Button>
            </Form>
            <div className="address" style={{ marginTop: '20px' }}>
              <h4 style={{ marginBottom: '5px' }}>Contact Info</h4>
              <p>
                <i className="fas fa-envelope" style={styles.icon}></i> admin@nebulixsoftware.com
              </p>
              <p>
                <i className="fas fa-phone" style={styles.icon}></i> +91 6376769600
              </p>
              <p>
                <i className="fas fa-map-marker-alt" style={styles.icon}></i> Udaipur, Rajasthan 313001
              </p>
              <div className="social">
                <span>
                  <a href="#"><i className="fab fa-facebook" style={styles.icon}></i></a>
                </span>
                <span>
                  <a href="#"><i className="fab fa-instagram" style={styles.icon}></i></a>
                </span>
                <span>
                  <a href="#"><i className="fab fa-twitter" style={styles.icon}></i></a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .address {
            margin-top: 20px; // Add space above the contact info
          }
          .d-none {
            display: none !important; // Force hide image on small devices
          }
        }
      `}</style>
    </Container>
  );
};

export default ContactForm;
