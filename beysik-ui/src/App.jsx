import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NewArrivals from './pages/NewArrivals';
import Basics from './pages/Basics';
import Collections from './pages/Collections';
import About from './pages/About'; 
import Navbar from './components/Navbar';
import './styles/global.css';
import ProductDetailsPage from './pages/ProductDetails'; // Add this import
import Cart from './pages/Cart'; // Import the Cart component

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} /> {/* Add this route */}
        <Route path="/cart" element={<Cart />} /> {/* Add this route for Cart */}
      </Routes>
    </Router>
  );
}

export default App;
