import React from 'react';
import '../Cart.css';

const Cart = ({ cartItems = [] }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart ({cartItems.length})</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <i className="cart-icon">🛒</i>
          <p>Your cart is empty</p>
          <span>Add some products to start shopping</span>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <div className="item-price">
                    <span className="quantity">Qty: {item.quantity}</span>
                    <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="subtotal">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="shipping">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
