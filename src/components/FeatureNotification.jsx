import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const FeatureNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true); // Show notification after 5 seconds
    }, 5000);

    const hideTimer = setTimeout(() => {
      setShowNotification(false); // Automatically hide notification after another 5 seconds
    }, 10000); // Total duration is 10 seconds (5 seconds visible)

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer); // Cleanup on component unmount
    };
  }, []);

  const handleCheckNowClick = () => {
    setShowNotification(false); // Close the notification first
    navigate('/pricing'); // Navigate to the pricing page
  };

  const handleCloseClick = () => {
    setShowNotification(false); // Close the notification
  };

  if (!showNotification) return null; // Don't render anything if not showing

  // Inline styles for the full-page notification
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const notificationStyle = {
    position: 'relative', // Set position for absolute positioning of close button
    width: '90%', // Set width to 90% for smaller devices
    maxWidth: '400px', // Limit max width for larger screens
    height: 'auto',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.5)', // Neon white shadow
    overflow: 'hidden', // Ensure content stays within the card
  };

  const imageStyle = {
    width: '100%', // Cover the full width
    height: 'auto', // Maintain aspect ratio
    objectFit: 'cover', // Ensure the image covers the area nicely
    display: 'block', // To avoid inline spacing issues
  };

  const buttonContainerStyle = {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%', // Make button full width
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
          &times; {/* Close icon */}
        </button>
        <img src="./NewFeature.png" alt="Feature" style={imageStyle} />
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={handleCheckNowClick} // Close notification and navigate
          >
            Check Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureNotification;
