import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import HelpDesk from './pages/HelpDesk';
import Footer from './layout/Footer';



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
