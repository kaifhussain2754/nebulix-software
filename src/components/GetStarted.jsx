import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './GetStarted.css'; // Import your CSS file
import { pricingPlans } from './Pricing'; // Import pricingPlans
import SuccessModal from './SuccessModal'; // Import SuccessModal component
import { useLocation } from 'react-router-dom'; // Import useLocation to read query parameters

export default function GetStarted() {
  const [result, setResult] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to control modal visibility
  const [selectedService, setSelectedService] = useState(''); // State for selected service
  const [customService, setCustomService] = useState(''); // State for custom service input

  const location = useLocation(); // Get current location to retrieve query params

  useEffect(() => {
    AOS.init(); // Initialize AOS

    // Get the service from query parameters if available
    const queryParams = new URLSearchParams(location.search);
    const service = queryParams.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [location.search]); // Only rerun when location.search changes

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Use your Web3Forms access key
    formData.append("access_key", "27db761f-1475-4069-9ec2-8eecf7ffe1e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowSuccessModal(true); // Show success modal
      event.target.reset();
      setCustomService(''); // Reset custom service input
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-wrapper">
      {/* Text Container with Stylish Gradient Text */}
      <div className="text-container" data-aos="fade-right">
        <h2 className="gradient-text">Get Started with our Services</h2>
        <p className="description">
          We offer a range of digital solutions including Web Development, App Development, 
          SEO, and Graphic Design. Our team is here to help you bring your ideas to life 
          with expert skills and innovative strategies.
        </p>
      </div>

      {/* Form Container */}
      <div className="form-container" data-aos="fade-left">
        <form onSubmit={onSubmit} className="form">
          <h1 className='Hireus'>Hire Us!</h1>
          {/* Group 1: Name and Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
          </div>

          {/* Group 2: Mobile and Firm Name */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" placeholder="Your Mobile" required />
            </div>
            <div className="form-group">
              <label htmlFor="firm_name">Firm Name</label>
              <input type="text" name="firm_name" placeholder="Your Firm Name" required />
            </div>
          </div>

          {/* Full width fields */}
          <div className="form-group full-width">
            <label htmlFor="service">Select Service</label>
            <select
              name="service"
              required
              value={selectedService}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedService(value);
                if (value !== 'Other') {
                  setCustomService(''); // Reset custom service if not "Other"
                }
              }}
            >
              <option value="">Select Service</option>
              {pricingPlans.map((plan, index) => (
                <option key={index} value={plan.name}>
                  {plan.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Conditional input for custom service */}
          {selectedService === 'Other' && (
            <div className="form-group full-width">
              <label htmlFor="custom_service">Please specify:</label>
              <input
                type="text"
                name="custom_service"
                placeholder="Type your service here"
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group full-width">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="form-submit-btn">Submit Form</button>
        </form>

        <span>{result}</span>
      </div>

      {/* Success Modal */}
      <SuccessModal
        showModal={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="We have received your request, our team will contact you shortly."
      />
    </div>
  );
}
