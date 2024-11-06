// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/before-digital">Before Digital</Link></li>
        <li><Link to="/digital">Digital</Link></li>
        <li><Link to="/frontend-projects">Frontend Projects</Link></li>
        <li><Link to="/photography">Photography</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
