import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]); // State to hold products
  const [error, setError] = useState(''); // State to hold errors
  const [categories, setCategories] = useState({}); // State to hold products grouped by category

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from the backend API
        const response = await axios.get('http://127.0.0.1:5000/api/products');
        console.log(response.data.products); // Debug: Check fetched product data
        setProducts(response.data.products);

        // Group products by category
        const groupedProducts = response.data.products.reduce((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product);
          return acc;
        }, {});

        setCategories(groupedProducts); // Set the categories state with grouped products
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {/* Display error message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* Loop through categories and display products in each category */}
      {Object.keys(categories).map((category) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{category}</h2>

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
              listStyleType: 'none',
              padding: 0,
            }}
          >
            {categories[category].map((product) => (
              <li
                key={product.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '15px',
                  width: '200px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                {/* Product Image */}
                <img
                  src={`http://127.0.0.1:5000${product.image_url}`} // Image path from backend
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    marginBottom: '10px',
                  }}
                />
                {/* Product Details */}
                <h3 style={{ fontSize: '1.1em', margin: '10px 0' }}>{product.name}</h3>
                <p style={{ fontSize: '0.9em', color: '#555' }}>{product.description}</p>
                <p style={{ fontWeight: 'bold', margin: '5px 0', color: '#333' }}>
                  Price: ${product.price}
                </p>
                <p style={{ margin: '5px 0', color: 'green', fontSize: '0.9em' }}>
                  Stock: {product.stock}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
