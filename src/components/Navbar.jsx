import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = ({ cartItems }) => {
  const categories = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics"
  ];

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          ShopMart
        </Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <div className="nav-dropdown">
            <span className="nav-link">Categories</span>
            <div className="dropdown-content">
              {categories.map(category => (
                <Link 
                  key={category}
                  to={`/category/${category}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/deals" className="nav-link">Deals</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        <div className="nav-icons">
          <Link to="/search" className="icon-link">
            🔍
          </Link>
          <Link to="/account" className="icon-link">
            👤
          </Link>
          <Link to="/cart" className="icon-link cart-icon">
            🛒
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;