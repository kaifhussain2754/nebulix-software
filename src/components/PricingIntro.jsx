import React, { useState, useEffect } from "react";
import PricingCalculator from "./PricingCalculator";
import AOS from "aos";
import "aos/dist/aos.css";

function PricingIntro() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleButtonClick = () => {
    setShowCalculator(true);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (showCalculator) {
    return <PricingCalculator />;
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center p-5"
      style={{
        backgroundColor: "#121212",
        color: "#f8f9fa",
        marginTop: '50px',
      }}
    >
      <div
        className="row d-flex align-items-center rounded"
        style={{
          backgroundColor: "#212529",
          color: "#f8f9fa",
          maxWidth: "1200px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Text Section */}
        <div
          className="col-md-6 p-4"
          data-aos="fade-right"
        >
          <h1 style={{ fontSize: "2em", marginBottom: "1em" }}>
            Website Pricing Calculator
          </h1>
          <p style={{ fontSize: "1.1em", marginBottom: "1.5em" }}>
            Welcome to our Website Pricing Calculator! Our pricing is based on a few
            essential factors to help us give you the best value for your
            requirements. Here’s how we calculate our rates:
          </p>
          <ul
            className="text-start list-unstyled"
            style={{
              marginBottom: "1.5em",
              paddingLeft: "1.5em",
              color: "#f8f9fa",
              fontSize: "1rem",
            }}
          >
            <li style={{ marginBottom: "0.75em" }}>
              <strong>Number of Pages</strong>: More pages increase the overall cost.
            </li>
            <li style={{ marginBottom: "0.75em" }}>
              <strong>Functionality Level</strong>: Choose from basic or advanced options to meet your needs.
            </li>
            <li style={{ marginBottom: "0.75em" }}>
              <strong>Maintenance</strong>: Add ongoing support to keep your website updated.
            </li>
          </ul>
          <p style={{ fontSize: "1.1em", marginBottom: "2em" }}>
            Click the button below to calculate an estimated price based on your
            preferences and needs.
          </p>
          <button
            onClick={handleButtonClick}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              alignSelf: "flex-start",
              fontFamily: "inherit",
              color: "#fff",
              fontWeight: 600,
              width: "100%",
              backgroundColor: "#000",
              border: "none",
              padding: "12px 16px",
              fontSize: "1.1em",
              gap: "8px",
              marginTop: "15px",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#000";
              e.target.style.color = "#fff";
            }}
          >
            Calculate Price for Your Website
          </button>
        </div>

        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block" data-aos="fade-left">
          <img
            src="./pricing.png"
            alt="Website design concept"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0 8px 8px 0",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PricingIntro;
