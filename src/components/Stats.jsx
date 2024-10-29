import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck, faUserFriends, faUserCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Check if the screen width is less than 768px
  const isMobile = window.innerWidth < 768;

  // Define styles for the section and its content
  const sectionStyle = {
    backgroundColor: '#343a40',
    color: '#ffffff',
    textAlign: 'center',
    padding: '40px',
  };

  const headingStyle = {
    marginBottom: '20px',
    fontSize: isMobile ? '1.8rem' : '2.5rem', // Reduced font size for mobile
  };

  const countStyle = {
    fontSize: isMobile ? '2.5rem' : '3rem', // Reduced count size for mobile
    margin: 0,
  };

  const iconStyle = {
    fontSize: isMobile ? '1rem' : '1.5rem', // Reduced icon size for mobile
    marginRight: '5px',
  };

  // Updated achievements data
  const achievements = [
    { title: 'Projects Completed', count: 49, icon: faClipboardCheck },
    { title: 'Clients Served', count: 40, icon: faUserCheck },
    { title: 'Years of Experience', count: 2, icon: faBriefcase },
    { title: 'Team Members', count: 15, icon: faUserFriends },
    { title: 'Completed Govt Projects', count: 3, icon: faTrophy }, // New achievement
  ];

  return (
    <div style={sectionStyle} ref={ref}>
      <h2 style={headingStyle}>
        <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '10px' }} />
        Our Achievements
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {achievements.map((item, index) => (
          <div key={index} style={{ flex: '1', margin: '10px', textAlign: 'center' }}>
            <h3 style={countStyle}>
              {inView ? <CountUp end={item.count} duration={2} /> : '0'}+
            </h3>
            <p style={{ marginTop: '10px' }}>
              <FontAwesomeIcon icon={item.icon} style={iconStyle} />
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
