import React from 'react';
import axios from 'axios';

const ApiTestButtons = () => {
  
  const handleFetchRequest = () => {
    fetch('https://8c75d06d5500.ngrok-free.app/api/cart/add-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        "id": "52",
      "quantity": "10"
      })
    })
    .then(response => response.json())
    .then(data => console.log('Fetch response:', data))
    .catch(error => console.error('Fetch error:', error));
  };

  const handleAxiosRequest = () => {
    axios.post('https://8c75d06d5500.ngrok-free.app/api/cart/add-item', {
      "id": "52",
      "quantity": "10"
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(response => console.log('Axios response:', response.data))
    .catch(error => console.error('Axios error:', error));
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
    </div>
  );
};

export default ApiTestButtons;