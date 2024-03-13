import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './components/AllRoutes/AllRoutes.jsx';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <AllRoutes/>


      </Router>
      
    </div>
    
  );
}

export default App;
