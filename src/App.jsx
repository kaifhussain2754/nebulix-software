// src/App.jsx
import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import getTheme from './theme';
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen"; // Import the SplashScreen component
import Home from "./components/Home"; // Import the Home component
import Services from "./components/Services"; // Import the Services component
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [showSplash, setShowSplash] = useState(true); // State to manage splash screen visibility

  const toggleColorScheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSplashFinish = () => {
    setShowSplash(false); // Hide the splash screen after it finishes
  };

  return (
    <ThemeProvider theme={getTheme(isDarkMode ? 'dark' : 'light')}>
      <Router>
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />} {/* Show splash screen */}
        <Navbar toggleColorScheme={toggleColorScheme} isDarkMode={isDarkMode} />
        <main style={{ padding: '20px' }}>
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/services" element={<Services />} /> {/* Services route */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/work-with-us" element={<h1>Work with Us</h1>} />
            <Route path="/contact-us" element={<h1>Contact Us</h1>} />
          </Routes>
        </main>
        <ConditionalFooter /> {/* Conditionally render Footer */}
      </Router>
    </ThemeProvider>
  );
};

// Conditional Footer Component
const ConditionalFooter = () => {
  const location = useLocation();

  // Check if the current path is not the home path
  if (location.pathname === "/") {
    return null; // Do not render the Footer on the home page
  }

  return <Footer />; // Render the Footer on other pages
};

export default App;
