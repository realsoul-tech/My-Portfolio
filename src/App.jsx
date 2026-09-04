import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';
import Gallery from './components/gallery'; // Import the Gallery component

import AdminDashboard from './pages/AdminDashboard';
import ProjectDetails from './pages/projectDetails';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

// Simple Home page using components directly
const HomePage = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

// Gallery page - FIXED with proper return statement
const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <Gallery />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;