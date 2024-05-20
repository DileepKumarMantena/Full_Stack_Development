import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [booksData, setBooksData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/GetEnterdBooks/');
        console.log('dss',response)
        const responseData = await response.json();
        console.log("Response Data:", responseData);

        if (response.ok) {
          setBooksData(responseData);
        } else {
          setError('Failed to fetch book data');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch book data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div>
          <p style={{ color: 'blue' }}>
            Book Name: <span style={{ color: 'black' }}>{booksData.Result?.[0]?.BookName}</span>
          </p>
          <p style={{ color: 'blue' }}>
            Author: <span style={{ color: 'black' }}>{booksData.Result?.[0]?.AuthorOfBook}</span>
          </p>
          <p style={{ color: 'blue' }}>
            Published Year: <span style={{ color: 'black' }}>{booksData.Result?.[0]?.PublishedYear}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
