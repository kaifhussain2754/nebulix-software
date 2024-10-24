import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuccessModal from './SuccessModal'; // Import your SuccessModal component

const CareerForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceLevel: '',
    selectedRole: '',
    message: '',
    resumeLink: '',
    linkedin: '',
    github: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone is required';
    if (!formData.experienceLevel) errors.experienceLevel = 'Experience level is required';
    if (!formData.selectedRole) errors.selectedRole = 'Role selection is required';
    if (!formData.message) errors.message = 'Message is required';
    if (!formData.resumeLink) errors.resumeLink = 'Resume link is required';

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true); // Start submitting

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "27db761f-1475-4069-9ec2-8eecf7ffe1e6");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("role", formData.selectedRole);
    formDataToSend.append("experienceLevel", formData.experienceLevel);
    formDataToSend.append("resumeLink", formData.resumeLink);
    formDataToSend.append("linkedin", formData.linkedin);
    formDataToSend.append("github", formData.github);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        setShowSuccessModal(true); // Open success modal
        closeModal(); // Close form modal
      } else {
        alert(`Form submission failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false); // End submission
    }
  };

  // Inline styles for overlay
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title">Career Application Form</h5>
            <button type="button" className="btn-close text-white" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Experience Level</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="experienceLevel"
                      value="Intern"
                      onChange={handleChange}
                    /> Intern
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value="Experienced"
                      onChange={handleChange}
                    /> Experienced
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value="Fresher"
                      onChange={handleChange}
                    /> Fresher
                  </label>
                </div>
                {formErrors.experienceLevel && <div className="text-danger">{formErrors.experienceLevel}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Select Role</label>
                <select
                  className={`form-select ${formErrors.selectedRole ? 'is-invalid' : ''}`}
                  name="selectedRole"
                  value={formData.selectedRole}
                  onChange={handleChange}
                >
                  <option value="">Select a role</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Python Developer">Python Developer</option>
                  <option value="Java Developer">Java Developer</option>
                  <option value="React.js">React.js</option>
                  <option value="Node.js">Node.js</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.selectedRole && <div className="invalid-feedback">{formErrors.selectedRole}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Link for Resume</label>
                <input
                  type="url"
                  className={`form-control ${formErrors.resumeLink ? 'is-invalid' : ''}`}
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  placeholder="Enter the URL of your resume"
                />
                {formErrors.resumeLink && <div className="invalid-feedback">{formErrors.resumeLink}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">LinkedIn Link (Optional)</label>
                <input
                  type="url"
                  className="form-control"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="Enter your LinkedIn profile URL"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">GitHub Link (Optional)</label>
                <input
                  type="url"
                  className="form-control"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="Enter your GitHub profile URL"
                />
              </div>

              <div className="mb-3 text-center"> {/* Centering the button */}
                <button
                  type="submit"
                  className="btn btn-light" // Changed to light button
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isSubmitting && <div style={overlayStyle} />} {/* Overlay for background */}
      {showSuccessModal && <SuccessModal closeModal={() => setShowSuccessModal(false)} />} {/* Success modal */}
    </div>
  );
};

export default CareerForm;
