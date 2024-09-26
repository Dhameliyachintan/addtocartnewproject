// src/ProductList.js
import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductList() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product data available.</div>;
  }

  const handleProductcart  = () => {

  }

  return (
    <div className="mt-4">
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body text-start">
              <h5 className="card-title mb-b">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price.toFixed(2)}</p>
              <p className="card-text">Brand: {product.brand}</p>
              <p className="card-text">Category: {product.category}</p>
              <p className="card-text">
                Availability: {product.availabilityStatus}
              </p>
              <p className="card-text">Rating: {product.rating} ⭐</p>
              <button className="btn btn-danger" onClick={() => handleProductcart(product)}>Add to cart</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
