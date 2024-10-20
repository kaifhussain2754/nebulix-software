import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'; // Import checkmark icon from react-icons

const SuccessModal = ({ showModal, onClose, message }) => {
  if (!showModal) return null; // If modal is not active, don't render

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)', // Dark transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    background: '#2c2c2c', // Dark theme background
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    color: '#fff', // White text color
    width: '400px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    animation: 'fadeIn 0.3s ease-in-out',
  };

  const checkIconStyle = {
    fontSize: '64px',
    color: '#4caf50', // Green color for the checkmark
    marginBottom: '16px',
  };

  const successTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '12px',
  };

  const messageStyle = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const closeButtonStyle = {
    backgroundColor: '#4caf50', // Green background
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const closeButtonHoverStyle = {
    backgroundColor: '#45a049', // Darker green on hover
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <IoMdCheckmarkCircleOutline style={checkIconStyle} />
        <h2 style={successTextStyle}>Success!</h2>
        <p style={messageStyle}>{message}</p>
        <button
          onClick={onClose}
          style={closeButtonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = closeButtonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = closeButtonStyle.backgroundColor)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
