import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Marquee from 'react-fast-marquee'; // Import the Marquee component

const TopBanner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600); // Initialize state

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Update state on resize
    };

    window.addEventListener('resize', handleResize); // Add resize listener
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on unmount
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#1E3E62', // Banner background color
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure this is above other elements
        fontSize: isSmallScreen ? '14px' : '16px', // Adjust font size based on screen width
      }}
    >
      <Marquee speed={50} style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>
          Our Pricing Calculator Just Dropped!!
        </span>
        <Link
          to="/pricing"
          style={{
            backgroundColor: '#0B192C',
            color: 'white',
            border: 'none',
            fontWeight: '600',
            borderRadius: '5px',
            padding: isSmallScreen ? '8px 12px' : '10px 15px',
            cursor: 'pointer',
            textDecoration: 'none',
            marginRight: '10px',
            fontSize: isSmallScreen ? '12px' : '14px',
          }}
        >
          Check Now
        </Link>
        <img
          src="/fire.png" // Path to your icon image
          alt="Fire Icon"
          style={{
            width: '30px',
            height: '30px',
            verticalAlign: 'middle',
          }}
        />
      </Marquee>
    </div>
  );
};

export default TopBanner;
