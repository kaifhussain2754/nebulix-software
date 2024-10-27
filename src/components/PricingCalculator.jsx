import React, { useState, useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { auth, googleProvider } from './FirebaseConfig';
import { signInWithPopup } from "firebase/auth";

function PricingCalculator() {
  const [formData, setFormData] = useState({
    monthlyUsers: 25000,
    functionality: "basic",
    maintenance: 0,
    totalPages: 10,
    adminPanel: false,
  });
  const [price, setPrice] = useState(null);
  const [calculated, setCalculated] = useState(false); // State to track if price has been calculated
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track if user is signed in
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Check local storage for sign-in status on component mount
    const signedIn = localStorage.getItem('isSignedIn');
    if (signedIn === 'true') {
      setIsSignedIn(true); // Set signed-in state to true if found in local storage
    }
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setIsSignedIn(true); // Set signed-in state to true
      localStorage.setItem('isSignedIn', 'true'); // Save sign-in status in local storage
      console.log("Signed in as:", result.user.displayName);
      calculatePrice(); // Call calculatePrice after sign in
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : (name === "monthlyUsers" ? Number(value) : (name === "maintenance" ? Number(value) : value)),
    });
  };

  const calculatePrice = () => {
    let totalPrice = 0;

    // Monthly Users (includes hosting)
    if (formData.monthlyUsers === 25000) {
      totalPrice += 3000;
      console.log("Added for 25,000 users: ₹3,000");
    } else if (formData.monthlyUsers === 100000) {
      totalPrice += 5000;
      console.log("Added for 100,000 users: ₹5,000");
    } else if (formData.monthlyUsers === 200000) {
      totalPrice += 11000;
      console.log("Added for 200,000 users: ₹11,000");
    }

    // Functionality
    if (formData.functionality === "basic") {
      totalPrice += 3000;
      console.log("Added for Basic (Static): ₹3,000");
    } else if (formData.functionality === "advanced") {
      totalPrice += 10000;
      console.log("Added for Advanced (Dynamic): ₹10,000");
    } else if (formData.functionality === "dynamic") {
      totalPrice += 15000;
      console.log("Added for Dynamic Web Application: ₹15,000");
    } else if (formData.functionality === "ecommerce") {
      totalPrice += 20000;
      console.log("Added for E-Commerce: ₹20,000");
    }

    // Log the maintenance value
    console.log(`Selected Maintenance: ${formData.maintenance}`);

    if (formData.maintenance > 0) {
      if (formData.maintenance === 1) {
        totalPrice += 800;
        console.log("Added for 1 Month Maintenance: ₹800");
      } else if (formData.maintenance === 3) {
        totalPrice += 2000;
        console.log("Added for 3 Months Maintenance: ₹2,000");
      } else if (formData.maintenance === 6) {
        totalPrice += 4000;
        console.log("Added for 6 Months Maintenance: ₹4,000");
      } else if (formData.maintenance === 12) {
        totalPrice += 9000;
        console.log("Added for 12 Months Maintenance: ₹9,000");
      }
    } else {
      console.log("No maintenance selected.");
    }

    // Extra Pages: First 10 pages are free, additional pages are ₹500 each
    const extraPages = Math.max(0, formData.totalPages - 10);
    totalPrice += extraPages * 500;
    console.log(`Added for Extra Pages: ₹${extraPages * 500}`);

    // Advanced Admin Panel
    if (formData.adminPanel) {
      totalPrice += 3000;
      console.log("Added for Advanced Admin Panel: ₹3,000");
    }

    // Log the final price
    console.log(`Total Price Calculated: ₹${totalPrice}`);
    setPrice(totalPrice); // Set the total price
    setCalculated(true); // Indicate that the price has been calculated
  };

  const handleBookNow = () => {
    navigate('/getstarted'); // Navigate to /getstarted
  };

  return (
    <div
      data-aos="fade-up"
      style={{
        width: "90%",
        maxWidth: "350px",
        backgroundColor: "#212529",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "10px",
        padding: "20px 30px",
        margin: "auto",
        color: "#f8f9fa",
        boxSizing: "border-box",
        marginTop: "110px"
      }}
    >
      <h2
        data-aos="fade-up"
        style={{
          textAlign: "center",
          fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
          margin: "20px 0 30px",
          fontSize: "28px",
          fontWeight: 800
        }}
      >
        Select Your Requirements
      </h2>

      {/* Monthly Users */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ width: "100%", textAlign: "center" }}>Monthly Users:</label>
        <select
          name="monthlyUsers"
          value={formData.monthlyUsers}
          onChange={handleChange}
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "1px solid #c0c0c0",
            padding: "12px 15px",
            backgroundColor: "#343a40",
            color: "#f8f9fa"
          }}
        >
          <option value={25000}>25,000</option>
          <option value={100000}>100,000</option>
          <option value={200000}>200,000</option>
        </select>
      </div>

      {/* Functionality */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ width: "100%", textAlign: "center" }}>Functionality:</label>
        <select
          name="functionality"
          value={formData.functionality}
          onChange={handleChange}
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "1px solid #c0c0c0",
            padding: "12px 15px",
            backgroundColor: "#343a40",
            color: "#f8f9fa"
          }}
        >
          <option value="basic">Basic (Static)</option>
          <option value="advanced">Advanced (Dynamic)</option>
          <option value="dynamic">Dynamic Web App</option>
          <option value="ecommerce">E-Commerce</option>
        </select>
      </div>

      {/* Maintenance */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ width: "100%", textAlign: "center" }}>Maintenance & Support:</label>
        <select
          name="maintenance"
          value={formData.maintenance}
          onChange={handleChange}
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "1px solid #c0c0c0",
            padding: "12px 15px",
            backgroundColor: "#343a40",
            color: "#f8f9fa"
          }}
        >
          <option value={0}>No Maintenance</option>
          <option value={1}>1 Month</option>
          <option value={3}>3 Months</option>
          <option value={6}>6 Months</option>
          <option value={12}>1 Year</option>
        </select>
      </div>

      {/* Total Pages */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ width: "100%", textAlign: "center" }}>Total Pages:</label>
        <input
          type="number"
          name="totalPages"
          value={formData.totalPages}
          onChange={handleChange}
          min="1"
          style={{
            width: "100%",
            maxWidth: "100px",
            borderRadius: "20px",
            border: "1px solid #c0c0c0",
            padding: "12px 15px",
            backgroundColor: "#343a40",
            color: "#f8f9fa"
          }}
        />
      </div>

      {/* Advanced Admin Panel */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
        <input
          type="checkbox"
          name="adminPanel"
          checked={formData.adminPanel}
          onChange={handleChange}
          style={{ marginRight: "8px" }}
        />
        <label>Advanced Admin Panel</label>
      </div>

      {isSignedIn ? (
        <>
          {/* Calculate Button */}
          <button
            onClick={calculatePrice}
            style={{
              padding: "10px 15px",
              borderRadius: "20px",
              border: "0",
              background: "teal",
              color: "white",
              cursor: "pointer",
              marginTop: "1rem",
              transition: "background-color 0.3s",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Calculate Price
          </button>
        </>
      ) : (
        <button
          onClick={handleGoogleSignIn}
          data-aos="zoom-in"
          style={{
            padding: "10px 15px",
            borderRadius: "20px",
            border: "0",
            background: "teal",
            color: "white",
            cursor: "pointer",
            marginTop: "1rem",
            transition: "background-color 0.3s",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          Sign In with Google to Check Price
        </button>
      )}

      {price !== null && calculated && (
        <>
          <h3 style={{ marginTop: "20px", color: "lightgreen", textAlign: "center" }}>
            Total Cost: Rs {price}
          </h3>
          <p style={{ color: "#f8f9fa", textAlign: "center", fontSize: "14px", marginTop: "10px" }}>
            Note: These prices are not exact and may vary; they are negotiable.
          </p>

          {/* Book Now Button */}
          <button
            onClick={handleBookNow}
            style={{
              padding: "10px 15px",
              borderRadius: "20px",
              border: "0",
              background: "orange",
              color: "white",
              cursor: "pointer",
              marginTop: "1rem",
              transition: "background-color 0.3s",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Book Now
          </button>
        </>
      )}
    </div>
  );
}

export default PricingCalculator;
