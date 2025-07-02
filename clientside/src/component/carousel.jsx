import React, { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg",
  "https://images.pexels.com/photos/1841108/pexels-photo-1841108.jpeg",
  "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <img src={images[index]} alt={`slide-${index}`} />
    </div>
  );
};

export default Carousel;
