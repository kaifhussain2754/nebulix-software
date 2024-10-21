import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TeamSlider.css';

const teamMembers = [
  {
    image: './KaifHussain.jpg',
    name: 'Kaif Hussain',
    title: 'Founder & CEO',
    description: 'Driven by innovation and passion, Kaif leads our team with a vision for the future.',
    email: 'example@example.com',
    linkedin: 'https://www.linkedin.com/in/kaif-hussain-739361236/'
  },
  {
    image: './mazahir.png',
    name: 'Mazahir Attari',
    title: 'Co - Founder',
    description: 'Mike brings creativity to life, designing our path toward visual excellence.',
    email: 'example@example.com',
    linkedin: 'https://www.linkedin.com/in/mazahir-attari-27a2bb222/'
  },
  {
    image: './mohit.jpeg',
    name: 'Mohit Bhatt',
    title: 'Co - Founder',
    description: 'John crafts designs that speak to the heart of our users.',
    email: 'example@example.com',
    linkedin: 'https://www.linkedin.com/in/mohit-bhatt-40445a1ba/'
  },
];

const TeamSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='TeamHeading'>
        <h1 className='HeadingTeamText'>Meet the Minds Behind the Magic</h1>
      <p className="intro-text">Our team is fueled by creativity, dedication, and the drive to make an impact. Get to know the people who turn ideas into reality.</p>
    <div className="team-slider">
      <Slider {...sliderSettings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} style={{ width: '100%' }} />
            <div className="container">
              <h2>{member.name}</h2>
              <p className="title">{member.title}</p>
              <p> <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <button className="button">Connect</button>
                </a></p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</div>
  );
};

export default TeamSlider;
