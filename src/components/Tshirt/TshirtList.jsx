import { useEffect, useState } from 'react';
import './TshirtList.css';

const TshirtList = () => {
  const [tshirt, setTshirt] = useState(null);  // Store a single T-shirt data
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend /test route
    fetch('http://localhost:5000/test')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log('Fetched data:', data);  // Debugging: Log the fetched data
        setTshirt(data);  // Set the T-shirt data (name, imageUrl, etc.)
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching data:', error);
      });
  }, []);  // Run the effect only once on component mount

  return (
    <div className="tshirt-gallery">
      {error && <p>Error: {error}</p>}
      {!tshirt ? (
        <p>Loading...</p>  // Loading state while waiting for the data
      ) : (
        <div className="tshirt-card">
          <img
            src={`http://localhost:5000${tshirt.imageUrl}`}  // Construct full image URL
            alt={tshirt.name}
          />
          <h3>{tshirt.name}</h3>
        </div>
      )}
    </div>
  );
};

export default TshirtList;
