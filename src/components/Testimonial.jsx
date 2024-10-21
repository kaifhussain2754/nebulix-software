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
    name: "Rahul Sharma",
    role: "Web Developer",
    rating: 5,
    colorClass: "bg-dark text-white",
    imgSrc: "./test1.jpg",
  },
  {
    id: 2,
    text: "Fantastic experience! Highly recommend their expertise.",
    name: "Anita Gupta",
    role: "Graphic Designer",
    rating: 4,
    colorClass: "bg-secondary text-white",
    imgSrc: "./test2.jpg",
  },
  {
    id: 3,
    text: "An excellent journey with a dedicated team!",
    name: "Ravi Mehta",
    role: "Project Manager",
    rating: 3,
    colorClass: "bg-info text-white",
    imgSrc: "./test3.jpg",
  },
  {
    id: 4,
    text: "I appreciate the care and attention they provided.",
    name: "Priya Singh",
    role: "Marketing Specialist",
    rating: 4,
    colorClass: "bg-danger text-white",
    imgSrc: "./test4.jpg",
  },
  {
    id: 5,
    text: "Extremely professional and accommodating team.",
    name: "Karan Patel",
    role: "Sales Manager",
    rating: 5,
    colorClass: "bg-dark text-white",
    imgSrc: "./test5.jpg",
  },
  {
    id: 6,
    text: "The team exceeded my expectations. Highly commendable!",
    name: "Aditi Joshi",
    role: "Software Engineer",
    rating: 5,
    colorClass: "bg-warning text-dark",
    imgSrc: "./test6.jpg",
  },
  {
    id: 7,
    text: "Remarkable results! I would love to work with them again.",
    name: "Vikram Rao",
    role: "Content Writer",
    rating: 4,
    colorClass: "bg-success text-white",
    imgSrc: "./test7.jpg",
  },
  {
    id: 8,
    text: "I highly recommend their services to everyone!",
    name: "Sneha Verma",
    role: "Digital Marketing Expert",
    rating: 5,
    colorClass: "bg-primary text-white",
    imgSrc: "./test8.jpg",
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
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
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