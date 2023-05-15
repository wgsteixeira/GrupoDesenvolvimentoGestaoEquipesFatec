import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import HelpDesk from './pages/HelpDesk';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/helpdesk">HelpDesk</Link>
      <Routes>
        <Route path='/helpdesk' element={<HelpDesk/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
