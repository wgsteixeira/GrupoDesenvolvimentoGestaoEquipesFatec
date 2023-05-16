import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './layout/Footer';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Navbar from './layout/Navbar';
import HelpDesk from './pages/HelpDesk';
import Portfolio from './pages/Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Portfolio />
    <HelpDesk />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
