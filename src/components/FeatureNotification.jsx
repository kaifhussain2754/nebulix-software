import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCheckNowClick = () => {
    setShowNotification(false);
    window.open('https://wa.link/cb3kww', '_blank'); // Open WhatsApp link in a new tab
  };

  const handleCloseClick = () => {
    setShowNotification(false);
  };

  if (!showNotification) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const notificationStyle = {
    position: 'relative',
    width: '90%',
    maxWidth: '400px',
    height: 'auto',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
  };

  const buttonContainerStyle = {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#ecb45b',
    color: 'white',
    border: 'none',
    fontWeight: '600',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <div style={overlayStyle}>
      <div style={notificationStyle}>
        <button style={closeButtonStyle} onClick={handleCloseClick}>
          &times;
        </button>
        <img src="./DiwaliOffer.png" alt="Feature" style={imageStyle} />
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={handleCheckNowClick}
          >
            Claim Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureNotification;
