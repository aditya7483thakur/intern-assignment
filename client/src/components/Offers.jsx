// Carousel.js
import React, { useState } from "react";

const Offers = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="custom-carousel-container">
        <button
          className="custom-prev-btn"
          style={{ zIndex: "10" }}
          onClick={goToPrev}
        >
          {"<"}
        </button>
        <div className="custom-carousel-content">
          <div
            className="custom-carousel-items"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="custom-carousel-item">
                <img
                  src={item}
                  alt={`Item ${index}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="custom-next-btn" onClick={goToNext}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Offers;
