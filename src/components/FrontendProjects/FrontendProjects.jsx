import Image1 from '../images/Frontend/Whistleblower.jpg';
import './FrontendProjects.css';

const FrontendProjects = () => {
  return (
    <div className="main-container">
      <div>
        <h1>Frontend Projects</h1>
        <p>
          In 2023, I decided to change my life and become a Frontend Developer/UX/UI Designer. <br />
          I started to learn HTML, CSS, JavaScript, React, and other technologies. <br />
          I am still learning and I am looking for a job as a Frontend Developer/UX/UI Designer. <br />
          <br />
          Below you can find some of my projects.
        </p>
      </div>
      <div className="projects">
        <img className="project-image" src={Image1} alt="Whistleblower" />
        <div className="project-info">
          <p>
            Whistleblower is a web application that allows users to report corruption and other crimes. The application is built with Figma + React.js.
          </p>
          <a className="styled-link" href="https://whistle-blower-frontend.vercel.app" target="_blank" rel="noopener noreferrer">
            See project
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrontendProjects;
