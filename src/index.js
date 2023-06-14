import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './layout/Footer';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Navbar from './layout/Navbar';
import HelpDesk from './pages/HelpDesk';
import Catalogo from './pages/Catalogo';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Navbar /> 
    <Home />
    <Catalogo />   
    <HelpDesk />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
