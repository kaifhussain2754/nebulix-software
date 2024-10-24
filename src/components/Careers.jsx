import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import CareerForm from './CareerFrom'; // Make sure to import the CareerForm component

const Careers = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const roles = [
    {
      title: "Frontend Developer",
      description: "We are looking for a skilled Frontend Developer with 2-3 years of experience in:",
      requirements: ["React.js", "Bootstrap", "Mobile-first design"],
      aos: "fade-up",
    },
    {
      title: "Backend Developer",
      description: "We are seeking a talented Backend Developer with 2-3 years of experience in:",
      requirements: ["Node.js", "Express", "Database management (MongoDB, SQL)"],
      aos: "fade-up",
    },
    {
      title: "Frontend Developer Intern",
      description: "We are looking for a Frontend Developer Intern with basic knowledge of:",
      requirements: ["React.js", "HTML5, CSS3", "JavaScript"],
      aos: "fade-up",
    },
    {
      title: "Backend Developer Intern",
      description: "We are seeking a Backend Developer Intern with exposure to:",
      requirements: ["Node.js", "Express.js", "MongoDB & SQL"],
      aos: "fade-up",
    },
    {
      title: "Python Developer Intern",
      description: "Looking for a Python Developer Intern with basic knowledge of:",
      requirements: ["Python", "Flask/Django", "Database (MongoDB/SQL)"],
      aos: "fade-up",
    },
  ];

  const buttonStyle = {
    backgroundColor: '#000', // Black color
    color: '#fff', // White text color for contrast
    padding: '0.8em 2em',
    borderRadius: '0.5em',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s ease-in-out',
    display: 'inline-block',
    textDecoration: 'none',
  };

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <h1 className="text-center mb-4" style={{ marginTop: '20px' }}>Careers at Nebulix Software</h1>
        <p className="lead text-center mb-5">
          Join our innovative team and help us create the future of software solutions.
        </p>

        {/* Experienced Developer Roles */}
        <h2 className="text-center mb-4">Experienced Roles</h2>
        <div className="row">
          {roles.slice(0, 2).map((role, index) => (
            <div className="col-md-6 mb-4" key={index} data-aos={role.aos}>
              <div className="card bg-secondary text-light">
                <div className="card-body">
                  <h5 className="card-title">{role.title}</h5>
                  <p className="card-text">{role.description}</p>
                  <ul>
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                  <button className="btn" style={buttonStyle} onClick={() => setShowModal(true)}>Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Roles */}
        <h2 className="text-center mt-5">Internship Opportunities</h2>
        <div className="row mt-4">
          {roles.slice(2).map((role, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos={role.aos}>
              <div className="card bg-secondary text-light">
                <div className="card-body">
                  <h5 className="card-title">{role.title}</h5>
                  <p className="card-text">{role.description}</p>
                  <ul>
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                  <button className="btn" style={buttonStyle} onClick={() => setShowModal(true)}>Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Resume Section */}
        <div className="text-center mt-5">
          <h4>Don’t see the role you’re looking for?</h4>
          <p>Send us your resume, and we’ll reach out when a suitable position opens.</p>
          <button className="btn btn-secondary" onClick={() => setShowModal(true)}>Submit Resume</button>
        </div>
      </div>

      {/* Modal for Career Form */}
      {showModal && <CareerForm closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default Careers;
