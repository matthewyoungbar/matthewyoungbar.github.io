import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutMe from '../components/aboutMe/aboutMe'
import Tutoring from '../components/tutoring/tutoring'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/tutoring" element={<Tutoring />} />
    </Routes>
  );
}

export default Router;
