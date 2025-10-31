import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="home" smooth={true} className="logo" onClick={closeMenu}>
            Portfolio
          </Link>

          {/* Navigation Links */}
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="home" smooth={true} onClick={closeMenu}>Home</Link>
            <Link to="about" smooth={true} onClick={closeMenu}>About</Link>
            <Link to="skills" smooth={true} onClick={closeMenu}>Skills</Link>
            <Link to="projects" smooth={true} onClick={closeMenu}>Projects</Link>
            <Link to="contact" smooth={true} onClick={closeMenu}>Contact</Link>
          </div>

          {/* Menu Button */}
          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? '✖' : '☰'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
