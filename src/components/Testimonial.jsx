import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonial.css";
// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Incredible service! I'm very satisfied with the results.",
    name: "Rishi Sen",
    role: "Web Developer",
    rating: 5,
    colorClass: "bg-dark text-white",
    imgSrc: "./Rishi.png",
  },
  {
    id: 2,
    text: "Fantastic experience! Highly recommend their expertise.",
    name: "Adnan Hussain",
    role: "Engineer",
    rating: 4,
    colorClass: "bg-secondary text-white",
    imgSrc: "./Adnan.jpg",
  },
  {
    id: 3,
    text: "An excellent journey with a dedicated team!",
    name: "Nivya Khialani",
    role: "Content Writer",
    rating: 3,
    colorClass: "bg-info text-white",
    imgSrc: "./Nivya.png",
  },
  {
    id: 4,
    text: "I appreciate the care and attention they provided.",
    name: "Riddhi Jain",
    role: "SEO Executive",
    rating: 4,
    colorClass: "bg-danger text-white",
    imgSrc: "./Ridhi.png",
  },
  {
    id: 5,
    text: "Extremely professional and accommodating team.",
    name: "Hunny Sen",
    role: "Sales Manager",
    rating: 5,
    colorClass: "bg-dark text-white",
    imgSrc: "./Hunny.png",
  },
  {
    id: 6,
    text: "The team exceeded my expectations. Highly commendable!",
    name: "Anshul Menaria",
    role: "Content Writer",
    rating: 5,
    colorClass: "bg-warning text-dark",
    imgSrc: "./Anshul.jpg",
  },
];



const TestimonialCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For devices with a max width of 768px
        settings: { 
          slidesToShow: 1, // Show only 1 card at a time
          slidesToScroll: 1 
        },
      },
      {
        breakpoint: 992, // For devices with a max width of 992px
        settings: { 
          slidesToShow: 2, 
          slidesToScroll: 1 
        },
      },
      {
        breakpoint: 1200, // Default breakpoint for larger screens
        settings: { 
          slidesToShow: 3, 
          slidesToScroll: 1 
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-white">Hear From Our Clients</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="card-body text-center">
              <img
                src={testimonial.imgSrc}
                alt={`${testimonial.name}'s profile`}
                className="rounded-circle mb-3"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="card-title">{testimonial.name}</h5>
              <p className="card-role">{testimonial.role}</p>
              <p className="card-text">"{testimonial.text}"</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-warning">&#9733;</span>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-muted">&#9733;</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCards;
