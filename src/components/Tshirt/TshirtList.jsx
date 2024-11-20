import { useEffect, useState } from 'react';
import './TshirtList.css';


const TshirtList = () => {
  const [tshirts, setTshirts] = useState([]); // Store all t-shirts
  const [currentTshirt, setCurrentTshirt] = useState(null); // Store the currently displayed t-shirt
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the data once when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/tshirts') // Ensure this is the correct endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        const tshirtArray = Array.isArray(data) ? data : [data];
        setTshirts(tshirtArray); // Store all fetched t-shirts
        setCurrentTshirt(tshirtArray[Math.floor(Math.random() * tshirtArray.length)]); // Pick a random t-shirt initially
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  // Function to pick a random t-shirt
  const showNextTshirt = () => {
    if (tshirts.length > 0) {
      const randomIndex = Math.floor(Math.random() * tshirts.length);
      setCurrentTshirt(tshirts[randomIndex]);
    }
  };

  return (
    
    <div className="tshirt-page-container">
  <main className="tshirt-gallery">
    {isLoading ? (
      <p>Loading...</p>
    ) : currentTshirt ? (
      <div className="tshirt-card">
        <img
          src={`http://localhost:5000${currentTshirt.imageUrl}`}
          alt={currentTshirt.name}
          onError={(e) => {
            console.error(`Error loading image: ${currentTshirt.imageUrl}`);
            e.target.src = 'path/to/placeholder/image.jpg'; // Fallback image
          }}
        />
        <button onClick={showNextTshirt} className="next-button">Next</button>
      </div>
    ) : (
      <p>No T-shirts available</p>
    )}
  </main>
</div>

    
  );
};

export default TshirtList;
