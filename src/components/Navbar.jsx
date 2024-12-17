import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaSearch } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-logo">E-Commerce</Link>
    <div className="navbar-search">
      <input type="text" placeholder="Search products..." />
      <button><FaSearch /></button>
    </div>
    <div className="navbar-links">
      <Link to="/products">Products</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/cart"><FaShoppingCart /></Link>
      <Link to="/login"><FaUserCircle /></Link>
    </div>
  </nav>
);

export default Navbar;
