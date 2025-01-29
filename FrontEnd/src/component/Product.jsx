import React from "react";
import "./product.css";

export const Product = ({ image, name, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt="product" className="product-image" />
      <div className="product-info">
        <h1 className="product-name">{name}</h1>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};
