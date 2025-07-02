import React from "react";

const FoodCard = ({ title, img }) => (
  <div className="card">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <button>Order Now</button>
  </div>
);

export default FoodCard;
