import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Home from '../Home/Home';
import Questions from '../Questions/Questions';
import AskQuestion from '../AskQuestion/AskQuestion';
import DisplayQuestion from '../Questions/DisplayQuestion';

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/Questions/:id" element={<DisplayQuestion />} />
      
    </Routes>
  )
}

export default AllRoutes;
