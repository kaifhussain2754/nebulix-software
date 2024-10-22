// components/NotificationCard.js
import React from 'react';

const NotificationCard = ({ message, style }) => {
  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '290px',
        height: '70px',
        background: '#353535',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backdropFilter: 'blur(10px)',
        transition: '0.5s ease-in-out',
        transform: 'translateX(-100%)', // Start off-screen to the left
        ...style,
        marginBottom: '10px',
        opacity: 1,
      }}
    >
      <div 
        style={{
          width: '50px',
          height: '50px',
          marginLeft: '10px',
          borderRadius: '10px',
          background: 'linear-gradient(#d7cfcf, #9198e5)',
        }}
      />
      <div style={{ width: 'calc(100% - 90px)', marginLeft: '10px', color: 'white', fontFamily: "'Poppins', sans-serif" }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Notification</h1>
          <span style={{ fontSize: '10px', color: '#ccc' }}>Just now</span>
        </div>
        <p style={{ fontSize: '12px', fontWeight: 'lighter', margin: 0 }}>{message}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
