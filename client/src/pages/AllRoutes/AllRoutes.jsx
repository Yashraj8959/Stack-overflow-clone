import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Home from '../Home/Home';
import Questions from '../Questions/Questions';
import AskQuestion from '../AskQuestion/AskQuestion';

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
      
    </Routes>
  )
}

export default AllRoutes;
