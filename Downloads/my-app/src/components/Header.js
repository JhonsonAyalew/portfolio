import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="home" smooth={true} className="logo">Portfolio</Link>
          <div className="nav-links">
            <Link to="home" smooth={true}>Home</Link>
            <Link to="about" smooth={true}>About</Link>
            <Link to="skills" smooth={true}>Skills</Link>
            <Link to="projects" smooth={true}>Projects</Link>
            <Link to="contact" smooth={true}>Contact</Link>
          </div>
          <button className="menu-btn">☰</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
