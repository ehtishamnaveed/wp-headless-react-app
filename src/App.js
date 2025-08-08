import React from 'react';
import axios from 'axios';

const ApiTestButtons = () => {
  
  const handleFetchRequest = () => {
    // Get existing cart_key from localStorage
    const existingCartKey = localStorage.getItem('cart_key');
    
    const requestBody = {
      "id": "52",
      "quantity": "10"
    };
    
    // Add cart_key to request if it exists
    if (existingCartKey) {
      requestBody.cart_key = existingCartKey;
    }
    
    fetch('https://36934f339448.ngrok-free.app/api/cart/add-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Fetch response:', data);
      
      // Store cart_key in localStorage if returned from server
      if (data.cart_key || data.result?.cart_key) {
        const cartKey = data.cart_key || data.result?.cart_key;
        localStorage.setItem('cart_key', cartKey);
        console.log('Cart key stored in localStorage:', cartKey);
      }
    })
    .catch(error => console.error('Fetch error:', error));
  };

  const handleAxiosRequest = () => {
    const existingCartKey = localStorage.getItem('cart_key');
    
    const requestBody = {
      "id": "52",
      "quantity": "10"
    };
    
    if (existingCartKey) {
      requestBody.cart_key = existingCartKey;
    }
    
    axios.post('https://36934f339448.ngrok-free.app/api/cart/add-item', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Axios response:', response.data);
      
      // Store cart_key in localStorage if returned from server
      if (response.data.cart_key || response.data.result?.cart_key) {
        const cartKey = response.data.cart_key || response.data.result?.cart_key;
        localStorage.setItem('cart_key', cartKey);
        console.log('Cart key stored in localStorage:', cartKey);
      }
    })
    .catch(error => console.error('Axios error:', error));
  };

  // Helper function to check current cart_key
  const checkCartKey = () => {
    const cartKey = localStorage.getItem('cart_key');
    console.log('Current cart_key in localStorage:', cartKey || 'None');
  };

  // Helper function to clear cart_key (for testing)
  const clearCartKey = () => {
    localStorage.removeItem('cart_key');
    console.log('Cart key cleared from localStorage');
  };

  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={handleFetchRequest}
        style={{ 
          margin: '10px', 
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Test with Fetch
      </button>
      
      <button 
        onClick={handleAxiosRequest}
        style={{ 
          margin: '10px', 
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Test with Axios
      </button>
      
      <button 
        onClick={checkCartKey}
        style={{ 
          margin: '10px', 
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Check Cart Key
      </button>

      <button 
        onClick={clearCartKey}
        style={{ 
          margin: '10px', 
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Clear Cart Key
      </button>
    </div>
  );
};

export default ApiTestButtons;