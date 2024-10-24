import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import './GetStarted.css'; // Import your CSS file
import SuccessModal from './SuccessModal'; // Import SuccessModal component

export default function ContactUs() {
  const [result, setResult] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

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
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-wrapper">
      {/* Text Container with Stylish Gradient Text */}
      <div className="text-container" data-aos="fade-right">
        <h2 className="gradient-text">Contact Us</h2>
        <p className="description">
          We would love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. Fill out the form below and we will get back to you as soon as possible.

          <div className="contact-item" style={{marginTop: '50px', padding: '5px'}}>
          <FaPhone className="contact-icon" />
          <span>+91 6376769600</span>
        </div>
        <div className="contact-item" style={{padding: '5px'}}>
          <FaEnvelope className="contact-icon" />
          <span>nebulixsoftware@gmail.com</span>
        </div>
        <div className="contact-item" style={{padding: '5px'}}>
          <FaMapMarkerAlt className="contact-icon" />
          <span>Udaipur, Rajasthan 313001</span>
        </div>
        </p>
      </div>

      {/* Form Container */}
      <div className="form-container" data-aos="fade-left">
        <form onSubmit={onSubmit} className="form">
          <h1 className='Hireus'>Get in Touch!</h1>
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

          {/* Group 2: Mobile */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" placeholder="Your Mobile" required />
            </div>
          </div>

          {/* Full width fields */}
          <div className="form-group full-width">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="form-submit-btn">Submit</button>
        </form>

        <span>{result}</span>
      </div>

      {/* Success Modal */}
      <SuccessModal
        showModal={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="Thank you for contacting us! We will get back to you shortly."
      />
    </div>
  );
}
