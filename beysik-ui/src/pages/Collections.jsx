import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-pages.css';

const BASICS = [
  { id: 1, name: 'Classic White Tee', price: '$40.00', image: 'https://placehold.co/400x500/FFFFFF/333?text=White+Tee&font=Inter' },
  { id: 2, name: 'Black Crewneck', price: '$50.00', image: 'https://placehold.co/400x500/111111/EEE?text=Black+Crewneck&font=Inter' },
  { id: 3, name: 'Neutral Tank Top', price: '$35.00', image: 'https://placehold.co/400x500/F5F5F5/333?text=Tank+Top&font=Inter' },
  { id: 4, name: 'Basic Cotton Shorts', price: '$45.00', image: 'https://placehold.co/400x500/EEEEEE/333?text=Cotton+Shorts&font=Inter' },
];

const Collections = () => {
  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h2 className="page-title">Collections</h2>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt; 
            <span className="breadcrumb-current">Collections</span>
          </div>
        </div>

        <div className="filter-sort-container">
          <div className="filter-container">
            <span className="filter-label">Filter by:</span>
            <select className="filter-select">
              <option value="All">All</option>
              <option value="Tops">Tops</option>
              <option value="Bottoms">Bottoms</option>
            </select>
          </div>
          <div className="sort-container">
            <span className="sort-label">Sort by:</span>
            <select className="sort-select">
              <option value="Newest">Newest</option>
              <option value="PriceLow">Price: Low to High</option>
              <option value="PriceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {BASICS.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
