import React, { useState, useEffect } from "react";
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonial.css"; // For custom styles

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Absolutely fantastic service! I couldn't be happier.",
    name: "John Doe",
    role: "Web Developer",
    rating: 5,
    colorClass: "bg-dark text-white",
    imgSrc: "src/assets/test1.jpg",
  },
  {
    id: 2,
    text: "Great experience and support! Highly recommended.",
    name: "Jane Smith",
    role: "Graphic Designer",
    rating: 4,
    colorClass: "bg-secondary text-white",
    imgSrc: "src/assets/test2.jpg",
  },
  {
    id: 3,
    text: "An amazing journey with a fantastic team!",
    name: "Mark Johnson",
    role: "Project Manager",
    rating: 3,
    colorClass: "bg-info text-white",
    imgSrc: "src/assets/test3.jpg",
  },
  {
    id: 4,
    text: "I love the way they handle everything with care.",
    name: "Emily Davis",
    role: "Marketing Specialist",
    rating: 4,
    colorClass: "bg-danger text-white",
    imgSrc: "src/assets/test4.jpg",
  },
  {
    id: 5,
    text: "Highly professional and very accommodating.",
    name: "Michael Brown",
    role: "Sales Manager",
    rating: 5,
    colorClass: "bg-dark text-white",
    imgSrc: "src/assets/test5.jpg",
  },
  {
    id: 6,
    text: "The team goes above and beyond. Truly commendable!",
    name: "Anna Taylor",
    role: "Software Engineer",
    rating: 5,
    colorClass: "bg-warning text-dark",
    imgSrc: "src/assets/test6.jpg",
  },
  {
    id: 7,
    text: "Incredible results, will definitely work with them again.",
    name: "Oliver Jones",
    role: "Content Writer",
    rating: 4,
    colorClass: "bg-success text-white",
    imgSrc: "src/assets/test7.jpg",
  },
  {
    id: 8,
    text: "Highly recommend this service to everyone!",
    name: "Sophia Brown",
    role: "Digital Marketing Expert",
    rating: 5,
    colorClass: "bg-primary text-white",
    imgSrc: "src/assets/test8.jpg",
  },
];

const TestimonialCards = () => {
  useEffect(() => {
    const initOwlCarousel = () => {
      if (window.$(".owl-carousel").length) {
        window.$(".owl-carousel").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          dots: true,
          nav: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          },
        });
      }
    };
    initOwlCarousel();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-white">Hear From Our Clients</h2>
      <div className="owl-carousel owl-theme">
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
      </div>
    </div>
  );
};

export default TestimonialCards;