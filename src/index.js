import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Footer from './layout/Footer';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Navbar from './layout/Navbar';
import HelpDesk from './pages/HelpDesk';
import Catalogo from './pages/Catalogo';
import Home from './pages/Home';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Catalogo />
    <HelpDesk />
    <Footer />
  </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
