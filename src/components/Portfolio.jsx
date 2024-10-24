import React, { useState } from 'react';
import TechStack from './TechStack';
import { FaPhp, FaDatabase } from 'react-icons/fa'; // Import relevant icons
import { FaReact } from 'react-icons/fa'; // React
import { SiExpress, SiMongodb, SiBootstrap } from 'react-icons/si'; // Express, MongoDB, Material-UI, Bootstrap
import ProjectModal from './ProjectModal'; // Import the modal component

const portfolioItems = [
  {
    image: './aakratisorganizers.jpg',
    title: 'AakratisOrganizers',
    description: 'An E-commerce Website',
    link: 'https://www.aakratisorganizers.com',
    technologies: [
      { name: 'PHP', icon: <FaPhp size={20} color="#899E9E" /> },
      { name: 'SQL', icon: <FaDatabase size={20} color="#0078D4" /> },
    ],
  },
  {
    image: './Dashboard.png',
    title: 'Weapon Management System',
    description: 'A Web Application to Manage Weapons Inventory, Made for Udaipur Military Station.',
    link: 'https://example.com/project-one',
    technologies: [
      { name: 'React', icon: <FaReact size={20} color="#61DAFB" /> },
      { name: 'Node', icon: <FaDatabase size={20} color="#68A063" /> },
      { name: 'Express', icon: <SiExpress size={20} color="#000000" /> },
      { name: 'MongoDB', icon: <SiMongodb size={20} color="#47A248" /> },
      { name: 'Material-UI', icon: <FaDatabase size={20} color="#007FFF" /> },
      { name: 'Bootstrap', icon: <SiBootstrap size={20} color="#563D7C" /> },
    ],
  },
];

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleShow = (item) => {
    if (item.title === 'Weapon Management System') {
      setSelectedImage(item.image);
      setShowModal(true);
    } else {
      // Optionally handle what happens when clicking other projects
      // For example, you could show an alert or redirect to the link
      window.open(item.link, '_blank'); // Open the link in a new tab
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-dark text-white text-center p-5">
      <TechStack />
      <h1 className="display-4 mb-4" style={{ fontSize: '2.5rem' }}>Some of Our Work</h1>
      <p className="lead mb-5" style={{ fontSize: '1.2rem' }}>
        Take a look at some of our recent work. Each project showcases our commitment to quality and creativity.
      </p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="col">
            <div 
              className="card bg-secondary text-white shadow-lg border-0 portfolio-card" 
              style={{ 
                width: '100%', 
                maxWidth: '400px', // Max width for larger screens
                margin: 'auto',
                padding: '10px', // Reduced padding
              }}
            >
              <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column" style={{ padding: '10px' }}>
                <h2 className="card-title" style={{ fontSize: '1.5rem' }}>{item.title}</h2>
                <p className="card-text" style={{ fontSize: '0.9rem' }}>{item.description}</p>
                {item.technologies && (
                  <div className="d-flex justify-content-center flex-wrap mb-3">
                    {item.technologies.map((tech, idx) => (
                      <div key={idx} className="me-2 d-flex align-items-center">
                        {tech.icon}
                        <span className="ms-1">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                <button onClick={() => handleShow(item)} className="btn btn-light" style={{ fontSize: '0.9rem' }}>
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <ProjectModal show={showModal} handleClose={handleClose} image={selectedImage} />

      {/* CSS for mobile responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            .card {
              max-width: 100%; // Make the card full width on mobile
            }

            .card-title {
              font-size: 1.2rem; // Reduce title size on mobile
            }

            .card-text {
              font-size: 0.8rem; // Reduce text size on mobile
            }

            .lead {
              font-size: 1rem; // Reduce lead size on mobile
            }

            h1 {
              font-size: 1.8rem; // Reduce heading size on mobile
            }
          }
        `}
      </style>
    </div>
  );
};

export default Portfolio;
