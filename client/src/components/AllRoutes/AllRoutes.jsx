import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../../App';
import Auth from '../../pages/Auth/Auth';

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Auth" element={<Auth />} />
      
    </Routes>
  )
}

export default AllRoutes;
