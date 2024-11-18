import { useEffect, useState } from 'react';
import './TshirtList.css';

const TshirtList = () => {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/test')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Check the data structure in the console
        setTshirts(Array.isArray(data) ? data : [data]);
 // Adjust based on actual data structure
        // Wrap data in an array if needed
      })
      .catch((error) => console.error('Error fetching data:', error));
      console.log("TshirtList component rendered");
  }, []);

  return (
    <div className="tshirt-gallery">
      {tshirts.length === 0 ? (
        <p>Loading or no T-shirts available</p>
      ) : (
        tshirts.map((tshirt, index) => (
          <div key={index} className="tshirt-card">
            <img src={tshirt.imageUrl} alt={tshirt.name} />
            <h3>{tshirt.name}</h3>
            <p>{tshirt.description}</p>
          </div>
        ))
      )}
    </div>
  );
  
};

export default TshirtList;
