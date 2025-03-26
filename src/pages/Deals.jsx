import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../Deals.css';

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=5');
        // Simulate deals by adding discount
        const dealsWithDiscount = response.data.map(product => ({
          ...product,
          originalPrice: product.price,
          price: (product.price * 0.8).toFixed(2) // 20% discount
        }));
        setDeals(dealsWithDiscount);
      } catch (error) {
        console.error("Error fetching deals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div className="deals-page">
      <div className="deals-header">
        <h1>Special Deals</h1>
        <p>Limited time offers on selected items</p>
      </div>
      
      {loading ? (
        <div className="loading">Loading deals...</div>
      ) : (
        <div className="deals-grid">
          {deals.map(deal => (
            <div key={deal.id} className="deal-card">
              <ProductCard product={deal} />
              <div className="discount-badge">20% OFF</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Deals;