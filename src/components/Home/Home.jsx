import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

import myselfRED from '../images/myselfRED.jpg';


// Your component for the parallax container
const Home = () => {
  const titleRef = useRef();
  const paragraphRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToBeforeDigital = () => {
    navigate('/before-digital');
  };

  const navigateToDigital = () => {
    navigate('/digital');
  };

  const navigateToFrontendProjects = () => {
    navigate('/frontend-projects');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      titleRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
      paragraphRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="burger-menu-icon" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-item"><Link to="/before-digital">Before Digital</Link></div>
        <div className="menu-item"><Link to="/digital">Digital</Link></div>
        <div className="menu-item"><Link to="/frontend-projects">Frontend projects</Link></div>
      </div>
      <div className="parallax-container" style={{ backgroundImage: `url(${myselfRED})` }}>
        <h1 ref={titleRef} className="title">ZUZANA DROPPOVA</h1>
        <p ref={paragraphRef} className="paragraph1">
          Artist, UX/UI designer, Junior Frontend Developer
        </p>
        <div className="about">
          <h2>About Me</h2>
          <p className="paragraph2">
            Born and raised in Slovakia, living in Brussels since 2017. I&apos;m
            known as a writer of sci-fi and horror. Better known as an
            illustrator. Since 2019, I only create digitally.
          </p>
        </div>
        <p className="paragraph3">
          <h2>See My Artworks</h2>
        </p>
        <div className="buttons">
          <button onClick={navigateToBeforeDigital}>Before Digital</button>
          <button onClick={navigateToDigital}>Digital</button>
          <button onClick={navigateToFrontendProjects}>Frontend projects</button>
        </div>
      </div>
    </>
  );
};

export default Home;
