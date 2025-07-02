import React from 'react';

const HeroCarousel = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="https://imgs.search.brave.com/7P_T-xoVadAWVOVjkobAq0KLa19XjXIlef5J66Jkm_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/Nzk3OTk1OS9waG90/by9zbmFjay1qdW5r/LWZhc3QtZm9vZC1v/bi10YWJsZS1pbi1y/ZXN0YXVyYW50LXNv/dXAtc2F1Y2Utb3Ju/YW1lbnQtZ3JpbGwt/aGFtYnVyZ2VyLWZy/ZW5jaC1mcmllcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UWJGazJTZkRiLTdv/SzVXbzlkS216RkdO/b2ktaDhIVkVkT1lX/WmJJamZmbz0" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to Our Website</h5>
            <p>Your journey starts here.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="https://imgs.search.brave.com/4fh1vJ_HkBNygCWPBmukmNn0Y-4F2PeqEQevE1v8vpQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb29k/LWJhbGFuY2VkLWRp/ZXQtMTQyMDUxNTUu/anBn" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Explore Our Services</h5>
            <p>We provide the best solutions.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="https://imgs.search.brave.com/x432nHds-ojb_HlA7ePPo52lAWxNusZ2cV9Nok7NqrE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI0LzA3LzEx/LzM2MF9GXzUyNDA3/MTE3MV9iVFNLdlZB/N0tKY1BUM21mYW5V/YXNqc2Q4YUMwREhH/UC5qcGc" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Contact Us</h5>
            <p>Let's work together!</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;
