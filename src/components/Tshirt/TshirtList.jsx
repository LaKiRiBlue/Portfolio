import { useEffect, useState } from 'react';
import './TshirtList.css';

const TshirtList = () => {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tshirts')
      .then(response => response.json())
      .then(data => setTshirts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="tshirt-gallery">
      {tshirts.map(tshirt => (
        <div key={tshirt._id} className="tshirt-card">
          <img src={tshirt.imageUrl} alt={tshirt.name} />
          <h3>{tshirt.name}</h3>
          <p>{tshirt.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TshirtList;
