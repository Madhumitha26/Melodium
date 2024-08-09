import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import CoursesPage from './pages/CoursesPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
    </>
  );
}

export default App;