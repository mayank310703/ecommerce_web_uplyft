import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import Login from './components/Login';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Chatbot from './components/Chatbot'; // Import Chatbot

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    <Chatbot /> {/* Add the chatbot here */}
  </Router>
);

export default App;
