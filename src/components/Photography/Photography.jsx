import { useState } from 'react';
import Image1 from '../images/Photography/cosplay.jpg';
import Image2 from '../images/Photography/travelling.jpg';
import Image3 from '../images/Photography/wrestling.jpg';
import './Photography.css';

const Photography = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);


  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="main-container">
      <div>
        <h1>Photography</h1>
        <p>
          When I was 7 years old, my grandfather Jean decided to start teaching me how to take pictures. He told me everything he knew about light and darkness, warm and cold colors, sharpness, distances, and composition. I got my first camera on my 10th birthday. It was a Russian Ljubitel 166 that still used paper film. <br />
          For many years, I&apos;ve been using mechanical mirror cameras like Practica, Nikon, or Lomo. They used celluloid film. I learned how to develop pictures in the darkroom... yes, I was doing them in the bathroom when my parents were out during the weekend. <br />
          Feel free to check my photos. I am using a mutual account with my husband, who is also a photographer. The pics that are mine have &quot;kiri&quot; at the end of the name. <br />
          <br />
          Below you can find some of my projects.
        </p>
      </div>
      <div className="categories">
        <h1>Cosplay</h1>
        <img
          className="category-image"
          src={Image1}
          alt="cosplay"
          onClick={() => openModal({ src: Image1, alt: 'Cosplay' })}
        />
        <div className="info">
          <p>
            Cosplay is a performance art in which the participants dress in costumes and makeup, representing characters from anime, video games, television, and film. In addition to creating authentic costumes, the cosplayers also act in character and are usually subject matter experts on the characters they are replicating.
          </p>
          <a className="styled-link" href="https://www.flickr.com/photos/miguel_discart/albums" target="_blank" rel="noopener noreferrer">
            See photos
          </a>
        </div>
      </div>
      <div className="categories">
        <h1>Travelling</h1>
        <img
          className="category-image"
          src={Image2}
          alt="travelling"
          onClick={() => openModal({ src: Image2, alt: 'Travelling' })}
        />
        <div className="info">
          <p>
            I believe that travelling is the best way to learn about the world. It is a great way to learn about different cultures, meet new people, and see new places. I have been to many countries and I have seen many amazing things. I have met people from all over the world and I have learned so much from them. I have also seen some of the most beautiful places on earth. I love to travel and I hope to see many more amazing places in the future.
          </p>
          <a className="styled-link" href="https://www.flickr.com/photos/miguel_discart/albums" target="_blank" rel="noopener noreferrer">
            See photos
          </a>
        </div>
      </div>
      <div className="categories">
        <h1>Wrestling</h1>
        <img
          className="category-image"
          src={Image3}
          alt="wrestling"
          onClick={() => openModal({ src: Image3, alt: 'Wrestling' })}
        />
        <div className="info">
          <p>
            Wrestling photography captures the raw energy, emotion, and action in the ring. It requires sharp timing and an eye for impactful moments to truly showcase the athletes&apos; dedication and the atmosphere of the event.
          </p>
          <a className="styled-link" href="https://www.flickr.com/photos/miguel_discart/albums" target="_blank" rel="noopener noreferrer">
            See photos
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>X</button>
            <img src={modalImage.src} alt={modalImage.alt} className="modal-image" />
            <p>{modalImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
