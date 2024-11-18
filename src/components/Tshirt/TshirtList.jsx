import { useEffect, useState } from 'react';
import './TshirtList.css';

const TshirtList = () => {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tshirts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Check the data structure in the console
        setTshirts(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // The empty array ensures `useEffect` runs only once when the component mounts
  

  return (
    <div className="tshirt-gallery">
      {tshirts.length === 0 ? (
        <p>Loading or no T-shirts available</p>
      ) : (
        tshirts.map((tshirt, index) => (
          <div key={index} className="tshirt-card">
            <img 
              src={`http://localhost:5000/images/${tshirt.imageUrl}`} 
              alt={tshirt.name} 
              onError={(e) => {
                console.error(`Error loading image: ${tshirt.imageUrl}`);
                e.target.src = 'path/to/placeholder/image.jpg'; // Fallback image
              }}
            />
            <h3>{tshirt.name}</h3>
            <p>{tshirt.description}</p>
          </div>
        ))
      )}
    </div>
  );
  
};

export default TshirtList;