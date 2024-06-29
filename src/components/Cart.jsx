import React from 'react';

const Cart = ({cartItems}) => (
    <div className='cart'>
        <h2>Your cart</h2>
        <ul>
            {cartItems.map((item, index)=>(
                <li key={index}>
                    {item.title} - {item.quantity}
                </li>
            ))}
        </ul>
    </div>
);

export default Cart;