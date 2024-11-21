// src/components/GoToTopButton/GoToTopButton.jsx
import { useState, useEffect } from 'react';
import './GoToTopButton.css'; // To style the button

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`go-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      TOP
    </button>
  );
};

export default GoToTopButton;
