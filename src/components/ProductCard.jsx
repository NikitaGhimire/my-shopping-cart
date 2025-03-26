// ProductCard.jsx
import React, { useState } from 'react';
import '../ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product, quantity);
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const price = Number(product.price);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${isNaN(price) ? '0.00' : price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button 
          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
          disabled={quantity <= 1}
        >
          −
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button 
          onClick={() => setQuantity(prev => prev + 1)}
        >
          +
        </button>
      </div>
      <button 
        onClick={handleAddToCart}
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
