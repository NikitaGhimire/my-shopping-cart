import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({cartCount}) => (
    <nav>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/shop">Shop</Link></li>
            <li> Cart: {cartCount}</li>
        </ul>
    </nav>
);

export default Navbar;