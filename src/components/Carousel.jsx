import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "/hero-rolex.jpg",
      caption: "Crafted with durability and precision - Rolex",
      anchor: "/rolex",
    },
    {
      id: 1,
      image: "/patek-hero.png",
      caption: "Indulge in luxury with Patek Philippe",
      anchor: "/patek",
    },
    {
      id: 2,
      image: "/omega-hero.webp",
      caption: "Elevate your style with Omega",
      anchor: "/omega",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);


  const renderSlides = () => {
    return slides.map((slide) => (
      <div
        key={slide.id}
        className={`slide-container fade ${
          slide.id === currentSlide ? "active" : ""
        }`}
      >
        <Link to={slide.anchor}>
          <img src={slide.image} alt="" />
          <div className="slide-description">
            <p>{slide.caption}</p>
            <span className="slide-a" to={slide.anchor}>
              Discover
            </span>
          </div>
        </Link>
      </div>
    ));
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  };

  const renderDots = () => {
    return slides.map((slide, index) => (
      <button
        key={slide.id}
        className={`dot ${index === currentSlide ? "active" : ""}`}
        onClick={() => handleSlideChange(index)}
      ></button>
    ));
  };

  return (
    <div className="carousel">
      <div className="slides-container">{renderSlides()}</div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
}