import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-pages.css';
import allProducts from '../data/products.json';

const Collections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filter products tagged as 'collections'
    const collectionItems = allProducts.filter(p => p.tags && p.tags.includes('collections'));
    setProducts(collectionItems);
  }, []);

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
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
              <div className="product-image-container">
                <img
                  src={product.listingImage}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
