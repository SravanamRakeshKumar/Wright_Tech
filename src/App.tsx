import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`${import.meta.env.VITE_APP_API_URL}about`} element={<About />} />
          <Route path={`${import.meta.env.VITE_APP_API_URL}courses`} element={<Courses />} />
          <Route path={`${import.meta.env.VITE_APP_API_URL}contact`} element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;