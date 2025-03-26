import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../CategoryPage.css';

const CategoryPage = ({ addToCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  const handleAddToCart = (product, quantity) => {
    if (addToCart) {
      addToCart(product, quantity);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p>{products.length} products found</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;