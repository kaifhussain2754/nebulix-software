import React, { useState, useEffect } from "react"; // Import useState here
import { ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import getTheme from './theme';
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen"; 
import Home from "./components/Home"; 
import Services from "./components/Services"; 
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import ContactForm from "./components/ContactForm";
import WebDevelopment from "./components/WebDevelopment";
import AppDevelopment from "./components/AppDevelopment";
import UIUXDesign from "./components/UIUX";
import SEOOptimization from "./components/SEOOptimization";
import GraphicDesign from "./components/GraphicDesign";
import AndroidDevelopment from "./components/AndroidDevelopment";
import IOSDevelopment from "./components/IOS";
import ContactUs from "./components/ContactUs";
import Chatbot from "./components/Chatbot"; // Import the Chatbot component

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  const toggleColorScheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <ThemeProvider theme={getTheme(isDarkMode ? 'dark' : 'light')}>
      <Router>
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
        <Navbar toggleColorScheme={toggleColorScheme} isDarkMode={isDarkMode} />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/web" element={<WebDevelopment />} />
            <Route path="/app" element={<AppDevelopment />} />
            <Route path="/uiux" element={<UIUXDesign />} />
            <Route path="/SEO" element={<SEOOptimization />} />
            <Route path="/graphic" element={<GraphicDesign />} />
            <Route path="/android" element={<AndroidDevelopment />} />
            <Route path="/IOS" element={<IOSDevelopment />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <ConditionalFooter />
        <Chatbot /> {/* Render the Chatbot component */}
      </Router>
    </ThemeProvider>
  );
};

// Conditional Footer Component
const ConditionalFooter = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <Footer />;
};

export default App;
