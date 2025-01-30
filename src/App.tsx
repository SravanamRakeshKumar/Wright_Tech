import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  const basePath = import.meta.env.VITE_APP_BASE_PATH || '';
  return (
   
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path={`${basePath}/`} element={<Home />} />
          <Route path={`${basePath}/about`} element={<About />} />
          <Route path={`${basePath}/courses`} element={<Courses />} />
          <Route path={`${basePath}/contact`} element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;