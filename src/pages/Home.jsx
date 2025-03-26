import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        // Getting categories from Fake Store API
        const categoriesResponse = await axios.get('https://fakestoreapi.com/products/categories');
        const categories = categoriesResponse.data;

        // Getting one product from each category
        const promises = categories.map(category =>
          axios.get(`https://fakestoreapi.com/products/category/${category}?limit=1`)
        );
        
        const responses = await Promise.all(promises);
        const products = responses.map(response => response.data[0]);
        
        setFeaturedProducts(products);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopMart</h1>
          <p>Discover amazing products at great prices</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured-categories">
        <h2>Featured Categories</h2>
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <div className="category-grid">
            {featuredProducts.map((product) => (
              <Link 
                to={`/category/${product.category}`} 
                className="category-card" 
                key={product.id}
              >
                <div className="category-image">
                  <img src={product.image} alt={product.category} />
                </div>
                <h3>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h3>
                <p>Shop Now →</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;