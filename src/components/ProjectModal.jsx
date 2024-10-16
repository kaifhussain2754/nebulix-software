import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProjectModal = ({ show, handleClose, image }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      backdrop="static" // Prevent closing on backdrop click
      style={{ color: '#ffffff' }} // Ensure text is white
    >
      <Modal.Header closeButton className="bg-dark">
        <Modal.Title>Project Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <img src={image} alt="Project Preview" style={{ width: '100%', height: 'auto' }} />
        <p>Project cannot be viewed due to privacy reasons, please contact us to know more.</p>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => window.location.href = "mailto:contact@yourdomain.com"}>
          Contact Us
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
