import React, { useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaJava } from 'react-icons/fa'; // Importing icons from react-icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const techStackItems = [
  {
    name: 'React.js',
    icon: <FaReact size={50} color="#61DAFB" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={50} color="#68A063" />,
  },
  {
    name: 'Express.js',
    icon: <FaDatabase size={50} color="#000" />, // Placeholder for Express.js
  },
  {
    name: 'MongoDB',
    icon: <FaDatabase size={50} color="#47A248" />,
  },
  {
    name: 'SQL',
    icon: <FaDatabase size={50} color="#0078D4" />,
  },
  {
    name: 'Swift',
    icon: <FaDatabase size={50} color="#F05138" />,
  },
  {
    name: 'Java',
    icon: <FaJava size={50} color="#007396" />,
  },
  {
    name: 'Python',
    icon: <FaPython size={50} color="#3776AB" />,
  },
  {
    name: 'Adobe Illustrator',
    icon: <FaDatabase size={50} color="#FF9A00" />, // Placeholder color for Illustrator
  },
  {
    name: 'Figma',
    icon: <FaDatabase size={50} color="#F24E1E" />, // Placeholder color for Figma
  },
  {
    name: 'Photoshop',
    icon: <FaDatabase size={50} color="#31A8FF" />, // Placeholder color for Photoshop
  },
  {
    name: 'Premiere Pro',
    icon: <FaDatabase size={50} color="#F00" />, // Placeholder color for Premiere Pro
  },
  {
    name: 'After Effects',
    icon: <FaDatabase size={50} color="#999" />, // Placeholder color for After Effects
  },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-dark text-white text-center py-5">
      <h1 className="mb-4">Tools & Technologies We Use</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {techStackItems.map((item, index) => (
            <div key={index} className="col" data-aos={index % 2 === 0 ? 'slide-right' : 'slide-left'}>
              <div className="card text-center bg-secondary border-light">
                <div className="card-body">
                  {item.icon}
                  <h5 className="card-title mt-3">{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
