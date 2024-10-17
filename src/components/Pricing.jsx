import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import './Pricing.css';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  // Define array of pricing data
  const [pricingPlans] = useState([
    {
      name: 'Basic Website',
      price: '₹5,000',
      visits: '10,000 monthly visits',
      features: [
        'Responsive Design',
        'Basic SEO Optimization',
        '5GB Storage',
        'Email Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Startup Website',
      price: '₹10,000',
      visits: '25,000 monthly visits',
      features: [
        'Custom Domain',
        'Blog Integration',
        '10GB Storage',
        'Standard Email Support',
        'Analytics Dashboard',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Business Website',
      price: '₹15,000',
      visits: '50,000 monthly visits',
      features: [
        'Unlimited Pages',
        'Advanced SEO Features',
        '20GB Storage',
        '24/7 Email Support',
        'Lead Generation Tools',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Portfolio Website',
      price: '₹8,000',
      visits: '20,000 monthly visits',
      features: [
        'Gallery Integration',
        'Contact Form',
        'Social Media Links',
        '5GB Storage',
        'Email Notifications',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Landing Page',
      price: '₹4,000',
      visits: '15,000 monthly visits',
      features: [
        'Single Page Design',
        'Lead Capture Forms',
        'Basic Analytics',
        'Mobile Optimization',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Educational Website',
      price: '₹12,000',
      visits: '30,000 monthly visits',
      features: [
        'Course Management System',
        'User Profiles',
        'Payment Integration',
        'Unlimited Courses',
        'Email Notifications',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Non-Profit Website',
      price: '₹6,000',
      visits: '15,000 monthly visits',
      features: [
        'Donation Integration',
        'Event Management',
        'Social Media Integration',
        '5GB Storage',
        'Email Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Travel Website',
      price: '₹14,000',
      visits: '40,000 monthly visits',
      features: [
        'Booking System',
        'Interactive Maps',
        'User Reviews',
        'Custom Itineraries',
        '24/7 Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Membership Website',
      price: '₹16,000',
      visits: '35,000 monthly visits',
      features: [
        'User Registration and Login',
        'Member-Only Content',
        'Payment Processing',
        'Community Forums',
        'Email Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Real Estate Website',
      price: '₹18,000',
      visits: '50,000 monthly visits',
      features: [
        'Property Listings',
        'Search Functionality',
        'Contact Forms for Agents',
        'Image Galleries',
        '24/7 Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Corporate Website',
      price: '₹22,000',
      visits: '100,000 monthly visits',
      features: [
        'Custom Features as per requirement',
        'Dedicated Account Manager',
        'Custom Analytics Dashboard',
        'Unlimited Storage',
        'Priority Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Blogging Platform',
      price: '₹7,500',
      visits: '20,000 monthly visits',
      features: [
        'User-Friendly Editor',
        'Social Media Integration',
        'SEO Optimization Tools',
        'Email Notifications',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Forum Website',
      price: '₹13,000',
      visits: '30,000 monthly visits',
      features: [
        'Discussion Boards',
        'User Registration',
        'Moderation Tools',
        'Email Notifications',
        'Mobile Responsive Design',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Affiliate Marketing Website',
      price: '₹11,000',
      visits: '25,000 monthly visits',
      features: [
        'Affiliate Links Management',
        'SEO Optimization',
        'Analytics Dashboard',
        'Email Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Job Portal',
      price: '₹19,000',
      visits: '40,000 monthly visits',
      features: [
        'Job Listings',
        'Employer Profiles',
        'Applicant Tracking System',
        'Email Notifications',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Event Management Website',
      price: '₹17,000',
      visits: '30,000 monthly visits',
      features: [
        'Event Listings',
        'RSVP Management',
        'Ticketing System',
        'Email Notifications',
        'Social Media Integration',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Membership Site for Creatives',
      price: '₹21,000',
      visits: '50,000 monthly visits',
      features: [
        'Content Library',
        'User Registration',
        'Content Monetization Options',
        '24/7 Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Health & Wellness Website',
      price: '₹15,000',
      visits: '30,000 monthly visits',
      features: [
        'Online Booking System',
        'Blog Integration',
        'Resource Library',
        'Email Support',
        '6 Months Maintenance Free',
      ],
    },
    {
      name: 'Custom Web Application',
      price: '₹25,000',
      visits: 'Unlimited',
      features: [
        'Tailored Features as per requirement',
        'API Integrations',
        'User Management System',
        'Ongoing Maintenance Support',
        '6 Months Maintenance Free',
      ],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filtered pricing plans based on search
  const filteredPlans = pricingPlans.filter(plan =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="text-center text-light mb-4" style={{marginTop: '50px'}}>Pricing Plans</h2>

      {/* Search Box */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search by plan name"
          className="form-control w-50 mx-auto search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan, index) => (
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <div className="pricing-card">
                <h2>{plan.name}</h2>
                <h3>
                  <span className="pricing-uppercase">{plan.price}</span>
                </h3>
                <p>{plan.visits}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span role="img" aria-label="check" style={{ marginRight: '8px' }}>✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="pricing-button">Enquire</a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-12 text-center">
            <p className="text-light">Did not find your desired result?</p>
            <button className="btn btn-primary">Submit your query here</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
