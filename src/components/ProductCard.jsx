// ProductCard.jsx
import React, { useState } from 'react';
import '../ProductCard.css';
const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)} className="add-to-cart-button">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
