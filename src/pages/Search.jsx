import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const filtered = response.data.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading ? (
        <div className="loading">Searching...</div>
      ) : (
        <div className="search-results">
          {results.length > 0 ? (
            <div className="products-grid">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            searchTerm && <p className="no-results">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;