import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Deals from './pages/Deals';
import About from './pages/About';
import Search from './pages/Search';
import Account from './pages/Account';
import CartPage from './pages/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div className="app">
      <Navbar cartItems={cartItems} />
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={handleAddToCart} />} />
          <Route 
            path="/shop" 
            element={<Shop addToCart={handleAddToCart} cartItems={cartItems} />} 
          />
          <Route 
            path="/category/:category" 
            element={<CategoryPage addToCart={handleAddToCart} />} 
          />
          <Route 
            path="/deals" 
            element={<Deals addToCart={handleAddToCart} />} 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/search" 
            element={<Search addToCart={handleAddToCart} />} 
          />
          <Route path="/account" element={<Account />} />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                onRemove={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
