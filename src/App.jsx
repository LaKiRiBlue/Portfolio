// src/App.jsx


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import BeforeDigital from "./components/BeforeDigital/BeforeDigital.jsx";
import Digital from "./components/Digital/Digital.jsx";
import FrontendProjects from "./components/FrontendProjects/FrontendProjects.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before-digital" element={<BeforeDigital />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/frontend-projects" element={<FrontendProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
