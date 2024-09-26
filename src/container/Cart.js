// src/Cart.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/cart.action';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartdata = useSelector((state) => state.cart.cart);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleProductDetails = (product) => {
    console.log(product);
    navigate("/ProductList", { state: { product } });
  };

  return (
    <div className="container">
      <h2>Cart</h2>
      <div className="row">
        {cartdata?.map((product) => (
          <div className="col-md-4" key={product.id}>
           <Link 
           to="/ProductList" 
           state={{ product }} 
           style={{ textDecoration: 'none' }} 
         >
            <div className="card mb-4">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                <p className="card-text">Brand: {product.brand}</p>
                <button className="btn btn-danger" onClick={() => handleProductDetails(product)}>View Details</button>
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
