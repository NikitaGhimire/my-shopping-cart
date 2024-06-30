import React from 'react';
import '../Cart.css';


const Cart = ({ cartItems = []}) => (
  <div className="cart">
    <h2>Your Cart ({cartItems.length})</h2>
    <ul>
      {cartItems.length === 0 ? (
        <li>Your cart is empty</li>
      ) : (
        cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.quantity}
          </li>
        ))
      )}
    </ul>
    <button className="checkout-btn">Checkout</button>
  </div>
);

export default Cart;
