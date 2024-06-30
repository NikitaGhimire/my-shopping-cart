import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { useOutletContext } from 'react-router-dom';
import '../shop.css'

const Shop = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cartItems, { ...product, quantity }];
    setCartItems(updatedCart);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className='shop-container'>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Shop;

