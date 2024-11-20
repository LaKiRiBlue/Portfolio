import { useEffect, useState } from 'react';
import './TshirtList.css';

const TshirtList = () => {
  const [tshirts, setTshirts] = useState([]); // Store all t-shirts
  const [likes, setLikes] = useState({}); // Store likes for each t-shirt
  const [currentTshirtIndex, setCurrentTshirtIndex] = useState(0); // Track the current t-shirt index
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/tshirts') // Ensure this is the correct endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const tshirtArray = Array.isArray(data) ? data : [data];
        setTshirts(tshirtArray);

        // Initialize likes for each t-shirt
        const initialLikes = {};
        tshirtArray.forEach((tshirt) => {
          initialLikes[tshirt.id] = 0; // Default to 0 likes for each t-shirt
        });
        setLikes(initialLikes);

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
      const nextIndex = Math.floor(Math.random() * tshirts.length);
      setCurrentTshirtIndex(nextIndex);
    }
  };

  // Function to handle liking a t-shirt
  const likeTshirt = () => {
    const currentTshirt = tshirts[currentTshirtIndex];
    if (currentTshirt) {
      const currentId = currentTshirt.id;

      setLikes((prevLikes) => ({
        ...prevLikes,
        [currentId]: prevLikes[currentId] + 1, // Increment likes for the current t-shirt
      }));
    }
  };

  const currentTshirt = tshirts[currentTshirtIndex];

  return (
    <div className="tshirt-page-container">
      <main className="tshirt-gallery">
        <div>
          <h1>My T-shirts and hoodies</h1>
          <p>
            Everyone, who knows me, would tell you that I love wearing T-shirts, hoodies, and sweatshirts.
            <br />
            If you can spare a minute, have a look at some of my faves.
          </p>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : currentTshirt ? (
          <div className="tshirt-card">
            <img
              src={`http://localhost:5000${currentTshirt.imageUrl}`}
              alt="T-shirt"
              onError={(e) => {
                console.error(`Error loading image: ${currentTshirt.imageUrl}`);
                e.target.src = 'path/to/placeholder/image.jpg'; // Fallback image
              }}
            />
            <p>Total likes: {likes[currentTshirt.id] || 0}</p>
            <button onClick={likeTshirt} className="like-button">
              Like
            </button>
            <button onClick={showNextTshirt} className="next-button">
              Next
            </button>
          </div>
        ) : (
          <p>No T-shirts available</p>
        )}
      </main>
    </div>
  );
};

export default TshirtList;
