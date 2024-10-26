    import React from 'react';
    import Marquee from 'react-fast-marquee';

    const AnimatedBanner = () => {
    return (
        <div style={{
        backgroundColor: '#ff9800', // Diwali-themed color
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'fixed', // Make it fixed at the top
        top: 0, // Align to the top
        left: 0,
        right: 0, // Stretch to full width
        zIndex: 999, // Ensure it appears above other elements
        }}>
        <Marquee speed={50}>
            <img
            src="/diwali.png" // Path to your lamp icon image
            alt="Lamp Icon"
            style={{
                width: '30px', // Set the desired width
                height: '30px', // Set the desired height
                marginRight: '10px', // Space between icon and text
                verticalAlign: 'middle' // Aligns the icon with the text
            }}
            />
            This Diwali Get 10% Off on all our services!
            <img
            src="/diwali.png" // Path to your lamp icon image
            alt="Lamp Icon"
            style={{
                width: '30px', // Set the desired width
                height: '30px', // Set the desired height
                marginLeft: '10px', // Space between icon and text
                verticalAlign: 'middle' // Aligns the icon with the text
            }}
            />
        </Marquee>
        </div>
    );
    };

    export default AnimatedBanner;
