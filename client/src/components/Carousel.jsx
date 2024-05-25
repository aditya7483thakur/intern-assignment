// Carousel.js
import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6; // Number of items to show initially

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="carousel-container">
        <button
          className="prev-btn"
          style={{ zIndex: "10" }}
          onClick={goToPrev}
        >
          {"<"}
        </button>
        <div className="carousel-content">
          <div
            className="carousel-items"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item`}
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <img
                  src={item}
                  alt={`Item ${index}`}
                  style={{ maxWidth: "150px", width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="next-btn" onClick={goToNext}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Carousel;
