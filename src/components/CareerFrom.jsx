import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CareerForm.css'

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
  const [result, setResult] = useState(''); // State for submission result

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
        setResult("Form Submitted Successfully");
        setShowSuccessModal(true); // Show success modal
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

  const styles = {
    modalContent: {
      backgroundColor: '#2a2a2a', // Dark background for modal
      color: '#f5f5f5', // Light text color
      borderRadius: '5px',
      padding: '2rem', // Increased padding
      border: '1px solid #444',
    },
    formControl: {
      background: 'none',
      color: '#f5f5f5',
      border: 'none',
      borderBottom: '2px solid #f5f5f5',
    },
    button: {
      backgroundColor: '#000',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '5px',
      border: 'none',
      width: '100%',
      padding: '10px 20px',
      marginTop: '10px',
    },
  };

  return (
    <div className="modal fade show" style={{ display: 'block', zIndex: 1050 }} tabIndex="-1">
      <div className="modal-bg" /> {/* Blur background overlay */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={styles.modalContent}>
          <div className="modal-header">
            <h5 className="modal-title">Career Application Form</h5>
            <button type="button" className="btn-close text-white" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/** Form Fields */}
              {[
                { label: 'Name', type: 'text', name: 'name', placeholder: '' },
                { label: 'Email', type: 'email', name: 'email', placeholder: '' },
                { label: 'Phone', type: 'tel', name: 'phone', placeholder: '' },
                {
                  label: 'Experience Level',
                  type: 'radio',
                  name: 'experienceLevel',
                  options: [
                    { label: 'Intern', value: 'Intern' },
                    { label: 'Experienced', value: 'Experienced' },
                    { label: 'Fresher', value: 'Fresher' },
                  ],
                },
                {
                  label: 'Select Role',
                  type: 'select',
                  name: 'selectedRole',
                  options: [
                    { label: 'Select a role', value: '' },
                    { label: 'Frontend Developer', value: 'Frontend Developer' },
                    { label: 'Backend Developer', value: 'Backend Developer' },
                    { label: 'Python Developer', value: 'Python Developer' },
                    { label: 'Java Developer', value: 'Java Developer' },
                    { label: 'React.js', value: 'React.js' },
                    { label: 'Node.js', value: 'Node.js' },
                    { label: 'Other', value: 'Other' },
                  ],
                },
                { label: 'Message', type: 'textarea', name: 'message', placeholder: '' },
                { label: 'Link for Resume', type: 'url', name: 'resumeLink', placeholder: 'Enter the URL of your resume' },
                { label: 'LinkedIn Link (Optional)', type: 'url', name: 'linkedin', placeholder: 'Enter your LinkedIn profile URL' },
                { label: 'GitHub Link (Optional)', type: 'url', name: 'github', placeholder: 'Enter your GitHub profile URL' },
              ].map((field, index) => (
                <div className="mb-3" key={index}>
                  <label className="form-label">{field.label}</label>
                  {field.type === 'radio' ? (
                    <div>
                      {field.options.map((option, idx) => (
                        <label key={idx} className="me-3">
                          <input
                            type="radio"
                            name={field.name}
                            value={option.value}
                            onChange={handleChange}
                          /> {option.label}
                        </label>
                      ))}
                      {formErrors[field.name] && <div className="text-danger">{formErrors[field.name]}</div>}
                    </div>
                  ) : field.type === 'select' ? (
                    <select
                      className={`form-select ${formErrors[field.name] ? 'is-invalid' : ''}`}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    >
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className={`form-control ${formErrors[field.name] ? 'is-invalid' : ''}`}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      style={styles.formControl}
                    />
                  )}
                  {formErrors[field.name] && <div className="text-danger">{formErrors[field.name]}</div>}
                </div>
              ))}
              <button type="submit" className="btn" style={styles.button} disabled={isSubmitting}>
                {isSubmitting ? 'Submitted!' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
