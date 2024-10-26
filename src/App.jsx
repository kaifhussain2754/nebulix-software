import React, { useState, useEffect } from "react"; 
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
import Chatbot from "./components/Chatbot"; 
import NotificationCard from "./components/NotificationCard"; 
import Careers from "./components/Careers";
import PricingIntro from "./components/PricingIntro";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [openInquiryModal, setOpenInquiryModal] = useState(false);
  const [notifications, setNotifications] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Notification Data
  const notificationsData = [
    "Just completed order for web development",
    "Just completed order for app development",
    "New client signed up for UI/UX design services",
    "Completed SEO optimization for client's website",
    "Received positive feedback from the last project",
    "Launched a new Android application successfully",
    "Updated portfolio with recent projects",
    "New inquiry received for graphic design services",
    "Just completed order for iOS development",
    "Finalized project scope with a new client",
    "Just received payment for the last project",
    "Started working on a new app development project",
    "Scheduled a meeting with a potential client",
    "Finished revisions on the web development project",
    "Just completed a successful website launch",
  ];

  // Toggle Color Scheme
  const toggleColorScheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Handle Splash Finish
  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  // Notification Logic
  useEffect(() => {
    const notificationTimer = setInterval(() => {
      const message = notificationsData[currentIndex % notificationsData.length];
      setNotifications((prev) => [
        ...prev,
        { message, id: Date.now() }, // Include a unique id for each notification
      ]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 20000);

    return () => clearInterval(notificationTimer);
  }, [currentIndex]);

  // Handle Notification Timeout
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications((prev) => prev.slice(1)); // Remove the first notification after 2 seconds
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [notifications]);

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
            <Route path="/pricing" element={<PricingIntro />} />
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
            <Route path="/career" element={<Careers />} />
          </Routes>
          {/* Display notifications */}
          <div className="notification-container" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
            {notifications.map((notification) => (
              <NotificationCard 
                key={notification.id} 
                message={notification.message} 
                style={{ 
                  transform: 'translateX(0)', // Slide in from left
                  opacity: 1,
                  animation: 'slide-in 0.5s forwards' // Apply animation
                }} 
              />
            ))}
          </div>
        </main>
        <ConditionalFooter />
        <Chatbot />
      </Router>
    </ThemeProvider>
  );
};

const ConditionalFooter = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <Footer />;
};

export default App;
