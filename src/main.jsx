import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this file exists or remove this line if unnecessary
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
