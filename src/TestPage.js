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

  // Extracting and logging items with `qty` values greater than zero from the data
  const extractItemsWithQuantities = (data) => {
    let itemsWithQuantities = [];

    const exploreObject = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          exploreObject(obj[key]);
        } else if (key === 'qty' && obj[key] > 0) {
          itemsWithQuantities.push(obj);
        }
      }
    };

    exploreObject(data);

    return itemsWithQuantities;
  };

  const itemsWithQuantities = extractItemsWithQuantities(data);

  console.log('Items with Quantities > 0:', itemsWithQuantities);

  return (
    <div>
      <h1>Filtered Items with Quantities greater 0</h1>
      {itemsWithQuantities.length > 0 ? (
        <ul>
          {itemsWithQuantities.map((item, index) => (
            <li key={index}>
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items with quantities greater than zero to display</p>
      )}
    </div>
  );
};

export default TestPage;
