import React, { useState } from 'react';
import Navbar from './components/NavBar';
import { Outlet } from 'react-router-dom';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Outlet context={{ cartItems, setCartItems }} />
    </div>
  );
};

export default App;
