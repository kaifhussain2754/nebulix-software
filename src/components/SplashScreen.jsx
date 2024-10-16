// src/components/SplashScreen.jsx
import React, { useEffect } from 'react';
import './SplashScreen.css'; // Make sure to create this CSS file for styles

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Call the onFinish function after 3 seconds
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img
        src="/src/assets/nebulix.png" // Replace with your logo path
        alt="Nebulix Software Logo"
        className="logo"
      />
      <h1 className="Splashtitle">Nebulix Software</h1>
    </div>
  );
};

export default SplashScreen;
