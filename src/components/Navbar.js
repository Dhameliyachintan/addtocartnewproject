import React from "react";
// import { a } from "react-router-dom";

export default function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" className="nav-link" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
              {/* <a href="/product" className="nav-link" aria-current="page">
                  product
              </a> */}
              </li>
              <li className="nav-item">
              <a href="#" className="nav-link" aria-current="page">
                  ProductList
              </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  User
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
