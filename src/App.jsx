import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';
import Particles from './components/Particles';
import CodeShowcase from './components/CodeShowcase';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = `${savedTheme}-theme`;

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = `${newTheme}-theme`;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Particles />
      <Header />
      <main>
        <Home/>
        <About />
        <Services />
        <CodeShowcase />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <BackToTop />
    </div>
  );
}

export default App;