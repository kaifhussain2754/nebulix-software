import React, { useState } from "react";
import PricingCalculator from "./PricingCalculator";

function PricingIntro() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleButtonClick = () => {
    setShowCalculator(true);
  };

  if (showCalculator) {
    return <PricingCalculator />;
  }

  return (
    <div
      className="container text-center mt-5 p-4 rounded"
      style={{
        backgroundColor: "#212529",
        color: "#f8f9fa",
        maxWidth: "600px",
      }}
    >
      <h1 style={{ fontSize: "2em", marginBottom: "1em" }}>
        Website Pricing Calculator
      </h1>
      <p style={{ fontSize: "1.1em", marginBottom: "1.5em" }}>
        Welcome to our Website Pricing Calculator! Our pricing is based on a few
        essential factors to help us give you the best value for your
        requirements. Here’s how we calculate our rates:
      </p>
      <ul className="text-start" style={{ marginBottom: "1.5em" }}>
        <li>
          <strong>Number of Pages</strong>: More pages increase the overall
          cost.
        </li>
        <li>
          <strong>Functionality Level</strong>: Basic and advanced options to
          meet your needs.
        </li>
        <li>
          <strong>Hosting</strong>: Optional hosting service for convenience.
        </li>
        <li>
          <strong>Maintenance</strong>: Add ongoing support to keep your
          website updated.
        </li>
      </ul>
      <p style={{ fontSize: "1.1em", marginBottom: "2em" }}>
        Click the button below to calculate an estimated price based on your
        preferences and needs.
      </p>
      <button
        className="btn btn-primary"
        onClick={handleButtonClick}
        style={{ padding: "10px 20px", fontSize: "1.1em" }}
      >
        Calculate Price for Your Website
      </button>
    </div>
  );
}

export default PricingIntro;
