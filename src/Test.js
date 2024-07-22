// src/pages/TestPage.js
import React, { useEffect, useState } from 'react';

const TestPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://test.api.boxigo.in/sample-data/');
        const result = await response.json();

        // Log the full API response to inspect its structure
        console.log('Full API Response:', result);

        setData(result);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  if (!data) return <div>Loading...</div>;

  // Extracting and logging `qty` values from the data
  const extractQuantities = (data) => {
    let quantities = [];

    const exploreObject = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          exploreObject(obj[key]);
        } else if (key === 'qty') {
          quantities.push(obj[key]);
        }
      }
    };

    exploreObject(data);

    return quantities;
  };

  const quantities = extractQuantities(data);

  // Filtering quantities greater than zero
  const filteredQuantities = quantities.filter(qty => qty > 0);

  console.log('Filtered Quantities:', filteredQuantities);

  return (
    <div>
      <h1>Filtered Quantities</h1>
      {filteredQuantities.length > 0 ? (
        <ul>
          {filteredQuantities.map((qty, index) => (
            <li key={index}>{qty}</li>
          ))}
        </ul>
      ) : (
        <p>No quantities greater than zero to display</p>
      )}
    </div>
  );
};

export default TestPage;
