import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-pages.css'; // Or your separated cart.css
// Assuming useEventEmitter is available from Evershop
import { useEventEmitter } from '@evershop/evershop'; 

// You might want to move API call functions to a separate utils/api.js file
const fetchCartApi = async () => {
  // Replace with your actual API endpoint
  const response = await fetch('/api/cart'); 
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};

const updateCartItemQuantityApi = async (itemId, quantity) => {
  // Replace with your actual API endpoint
  const response = await fetch('/api/cart/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ itemId, quantity }),
  });
  if (!response.ok) {
    throw new Error('Failed to update cart item quantity');
  }
  return response.json(); // Assuming API returns the updated cart or item
};

const removeCartItemApi = async (itemId) => {
  // Replace with your actual API endpoint
  const response = await fetch('/api/cart/remove', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ itemId }),
  });
  if (!response.ok) {
    throw new Error('Failed to remove cart item');
  }
  return response.json(); // Assuming API returns the updated cart or success status
};


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dispatch } = useEventEmitter(); // Or however you get the dispatch function

  useEffect(() => {
    const loadCart = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchCartApi();
        setCartItems(data.items || []); // Adjust based on your API response structure
        if (dispatch) {
          dispatch('cartFetched', { cart: data.items || [] });
        }
      } catch (err) {
        setError(err.message);
        console.error("Failed to load cart:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, [dispatch]);

  const handleQuantityChange = async (id, newQuantity) => {
    const originalCartItems = [...cartItems];
    // Optimistic update
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );

    try {
      const updatedCartData = await updateCartItemQuantityApi(id, Math.max(1, newQuantity));
      // If API returns the full updated cart, use it. Otherwise, the optimistic update is fine.
      // setCartItems(updatedCartData.items || getCart()); // Or re-fetch if necessary
      if (dispatch) {
        // Dispatch with the cart state after API confirmation if possible,
        // or rely on the optimistic update for immediate UI feedback.
        // For simplicity, we'll dispatch based on the current state which reflects the optimistic update.
        const currentCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        );
        dispatch('cartUpdated', { cart: currentCart });
      }
    } catch (err) {
      console.error("Failed to update quantity:", err);
      setCartItems(originalCartItems); // Revert on error
      setError("Failed to update item quantity.");
    }
  };

  const handleRemoveItem = async (id) => {
    const originalCartItems = [...cartItems];
    // Optimistic update
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

    try {
      await removeCartItemApi(id);
      // If API returns the full updated cart, use it. Otherwise, the optimistic update is fine.
      // setCartItems(updatedCartData.items || getCart()); // Or re-fetch if necessary
      if (dispatch) {
        const currentCart = cartItems.filter((item) => item.id !== id);
        dispatch('cartUpdated', { cart: currentCart });
      }
    } catch (err) {
      console.error("Failed to remove item:", err);
      setCartItems(originalCartItems); // Revert on error
      setError("Failed to remove item from cart.");
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (isLoading) {
    return (
      <div className="product-page">
        <div className="container">
          <p>Loading cart...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-page">
        <div className="container">
          <p>Error loading cart: {error}</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="product-page">
        <div className="container">
          <div className="page-header">
            <h2 className="page-title">Your Cart</h2>
          </div>
          <p>Your cart is empty. <Link to="/">Continue shopping</Link>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h2 className="page-title">Your Cart</h2>
          <div className="view-toggle">
            <button
              className={`btn-outline ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button
              className={`btn-outline ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
          </div>
        </div>
        <div className={`product-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
          {cartItems.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image-container">
                <img src={item.image} alt={item.name} className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">${item.price.toFixed(2)}</p>
                <div className="quantity-selection">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    className="quantity-input"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                    min="1"
                  />
                </div>
                <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ${calculateTotal()}</h3>
          <button className="btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;