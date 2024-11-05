import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

import myselfRED from '../images/myselfRED.jpg';

// Your component for the parallax container
const Home = () => {
  const titleRef = useRef();
  const paragraphRef = useRef();

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
      {/* Linear Navbar */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li> {/* Home Link Added */}
          <li><Link to="/before-digital">Before Digital</Link></li>
          <li><Link to="/digital">Digital</Link></li>
          <li><Link to="/frontend-projects">Frontend Projects</Link></li>
          <li><Link to="/photography">Photography</Link></li>
        </ul>
      </nav>

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
      </div>
    </>
  );
};

export default Home;
