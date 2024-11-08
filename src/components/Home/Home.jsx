// src/components/Home.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import myselfRED from '../images/myselfRED.jpg';



const Home = () => {
  const titleRef = useRef();
  const paragraphRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      titleRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
      paragraphRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
      <div className="parallax-container" style={{ backgroundImage: `url(${myselfRED})` }}>
        <h1 ref={titleRef} className="title">ZUZANA DROPPOVA</h1>
        <p ref={paragraphRef} className="paragraph1">
          Artist, UX/UI designer, Junior Frontend Developer
        </p>

        {/* About Section */}
        <div className="about">
          <h2>About Me</h2>
          <p className="paragraph2">
            I was born and raised in Slovakia. At the moment, I am living in Brussels since 2017. 
            I&apos;m
            known as a writer of sci-fi and horror. Better known as an
            illustrator and a photographer.
            Since 2019, I only create digitally. I started with Gimp and Krita but smoothly moved to Adobe Creative Suite.
            My illustrations and stories are in countless books and magazines. I am well known in Slovakia and Czech Republic. I use an artistic name: LaKiRi.
            I am also a UX/UI designer and a junior frontend developer.
            In the past, I was working as a primary / secondary teacher but I decided to change my career path and I am looking for an opportunity to work in a creative environment.
            Graphic design is my biggest passion and I am always looking for new challenges. I like to learn new things and I am not afraid of changes.
            I am a very creative person and I am always looking for new ways to express myself.
          </p>
        </div>

        {/* See My Artworks Section */}
        <div className='artworks'>
        <div className="paragraph3">
          <h2>Check it out:</h2>
        </div>
        <div className="buttons">
          <button onClick={() => navigate('/before-digital')}>Before Digital</button>
          <button onClick={() => navigate('/digital')}>Digital</button>
          <button onClick={() => navigate('/frontend-projects')}>Frontend Projects</button>
          <button onClick={() => navigate('/photography')}>Photography</button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
