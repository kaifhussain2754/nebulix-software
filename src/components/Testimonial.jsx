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
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    text: "Great experience and support! Highly recommended.",
    name: "Jane Smith",
    role: "Graphic Designer",
    rating: 4,
    colorClass: "bg-secondary text-white",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    text: "An amazing journey with a fantastic team!",
    name: "Mark Johnson",
    role: "Project Manager",
    rating: 3,
    colorClass: "bg-info text-white",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    text: "I love the way they handle everything with care.",
    name: "Emily Davis",
    role: "Marketing Specialist",
    rating: 4,
    colorClass: "bg-danger text-white",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    text: "Highly professional and very accommodating.",
    name: "Michael Brown",
    role: "Sales Manager",
    rating: 5,
    colorClass: "bg-dark text-white",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    text: "The team goes above and beyond. Truly commendable!",
    name: "Anna Taylor",
    role: "Software Engineer",
    rating: 5,
    colorClass: "bg-warning text-dark",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    text: "Incredible results, will definitely work with them again.",
    name: "Oliver Jones",
    role: "Content Writer",
    rating: 4,
    colorClass: "bg-success text-white",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    text: "Highly recommend this service to everyone!",
    name: "Sophia Brown",
    role: "Digital Marketing Expert",
    rating: 5,
    colorClass: "bg-primary text-white",
    imgSrc: "https://via.placeholder.com/100",
  },
];

const TestimonialCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mt-5" style={{ height: "100vh" }}>
      <h2 className="text-center mb-4 text-white">What Our Clients Say</h2>
      {/* Conditionally render Swiper only on mobile devices */}
      {isMobile ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1} // Display one slide on mobile
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={`card ${testimonial.colorClass}`}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.imgSrc}
                      alt={`${testimonial.name}'s profile`}
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px" }} // Profile image style
                    />
                    <div>
                      <h5 className="card-title">{testimonial.name}</h5>
                      <p className="card-text">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="card-text">"{testimonial.text}"</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <span key={index} className="text-warning">&#9733;</span> // Star icon
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, index) => (
                      <span key={index} className="text-muted">&#9733;</span> // Empty star icon
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`col-md-4 mb-4`}>
              <div className={`card ${testimonial.colorClass}`}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.imgSrc}
                      alt={`${testimonial.name}'s profile`}
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px" }} // Profile image style
                    />
                    <div>
                      <h5 className="card-title">{testimonial.name}</h5>
                      <p className="card-text">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="card-text">"{testimonial.text}"</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <span key={index} className="text-warning">&#9733;</span> // Star icon
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, index) => (
                      <span key={index} className="text-muted">&#9733;</span> // Empty star icon
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCards;
