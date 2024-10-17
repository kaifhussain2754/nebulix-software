import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Update this array to contain actual image sources for your logos
const techStackItems = [
  { name: 'React.js', imgSrc: 'src/assets/icons/react.svg' },
  { name: 'Node.js', imgSrc: 'src/assets/icons/nodejs.png' },
  { name: 'Express.js', imgSrc: 'src/assets/icons/express.svg' },
  { name: 'MongoDB', imgSrc: 'src/assets/icons/mongodb.svg' },
  { name: 'SQL', imgSrc: 'src/assets/icons/sql.svg' },
  { name: 'Swift', imgSrc: 'src/assets/icons/swift.svg' },
  { name: 'Java', imgSrc: 'src/assets/icons/java.png' },
  { name: 'PHP', imgSrc: 'src/assets/icons/php.png' },
  { name: 'MaterialUI', imgSrc: 'src/assets/icons/material-ui-1.svg' },
  { name: 'Bootstrap', imgSrc: 'src/assets/icons/bootstrap.png' },
  { name: 'HTML', imgSrc: 'src/assets/icons/html.png' },
  { name: 'CSS', imgSrc: 'src/assets/icons/css-3.png' },
  { name: 'JavaScript', imgSrc: 'src/assets/icons/js.png' },
  { name: 'Adobe Illustrator', imgSrc: 'src/assets/icons/illustrator.png' },
  { name: 'Figma', imgSrc: 'src/assets/icons/figma.png' },
  { name: 'Photoshop', imgSrc: 'src/assets/icons/photoshop.png' },
  { name: 'Premiere Pro', imgSrc: 'src/assets/icons/premiere-pro.png' },
  { name: 'After Effects', imgSrc: 'src/assets/icons/after-effects.png' },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-dark text-white text-center py-5" style={{ padding: '20px' }}>
      <h1 className="mb-4 toolstech" style={{ fontSize: '2.5rem' }}>Tools & Technologies We Use</h1>
      <div className="overflow-hidden">
        <div className="marquee">
          {techStackItems.map((item, index) => (
            <div className="d-flex justify-content-center align-items-center mx-2 icon-container" key={index}>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="icon-image"
                style={{ width: '80px', height: '80px' }} // Default icon size
              />
            </div>
          ))}
          {/* Duplicate the items to create the continuous effect */}
          {techStackItems.map((item, index) => (
            <div className="d-flex justify-content-center align-items-center mx-2 icon-container" key={index + techStackItems.length}>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="icon-image"
                style={{ width: '80px', height: '80px' }} // Default icon size
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee effect and neon shadow */}
      <style>
        {`
          .marquee {
            display: flex;
            width: 200%; /* Double the width for the duplicate items */
            animation: marquee 30s linear infinite; /* Adjusted duration for desktop speed */
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Move half the width to create the looping effect */
          }

          /* Ensures the marquee is hidden after it exits */
          .overflow-hidden {
            white-space: nowrap; /* Prevent line breaks */
            overflow: hidden; /* Hide overflow */
          }

          /* Gradient neon shadow effect */
          .icon-image {
            position: relative;
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
            transition: transform 0.3s ease-in-out;
          }

          .icon-image:hover {
            transform: scale(1.05); /* Slightly enlarge on hover */
            filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.5));
          }

          /* Media queries for mobile devices */
          @media (max-width: 768px) {
            .marquee {
              animation-duration: 10s; /* Speed up for mobile */
            }

            .toolstech {
              font-size: 0.5rem; /* Adjust font size for mobile */
            }

            .icon-image {
              width: 60px; /* Reduce icon size for mobile */
              height: 60px; /* Reduce icon size for mobile */
            }

            .icon-container {
              width: 100px; /* Adjust icon container width */
            }
          }
        `}
      </style>
    </div>
  );
};

export default TechStack;
