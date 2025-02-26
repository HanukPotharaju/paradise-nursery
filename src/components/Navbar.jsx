import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.jpg"; // Import your logo

function Navbar() {
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Paradise Nursery Logo" className="logo" />
        <Link to="/" className="brand-name">Paradise Nursery</Link>
      </div>

      <div className="nav-links">
        <Link to="/products">Plants</Link>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
