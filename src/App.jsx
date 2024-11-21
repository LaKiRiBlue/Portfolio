// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import BeforeDigital from "./components/BeforeDigital/BeforeDigital.jsx"; 
import Digital from "./components/Digital/Digital.jsx";
import FrontendProjects from "./components/FrontendProjects/FrontendProjects.jsx";
import Photography from "./components/Photography/Photography.jsx"; 
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar.jsx';
import Tshirt from './components/Tshirt/TshirtList.jsx';
import GoToTopButton from './components/GoToTopButton/GoToTopButton.jsx'; // Import GoToTopButton

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before-digital" element={<BeforeDigital />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/frontend-projects" element={<FrontendProjects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/tshirts" element={<Tshirt />} />
      </Routes>
      <GoToTopButton /> {/* Add GoToTopButton here */}
      <Footer />
    </Router>
  );
};

export default App;
