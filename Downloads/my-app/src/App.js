import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/ProjectsPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App dark-theme">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
       
      </div>
    </Router>
  );
}

export default App;
