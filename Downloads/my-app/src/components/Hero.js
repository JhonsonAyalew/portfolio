import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const titles = [
  "Full Stack Developer",
  "Python & Django Expert",
  "React / React Native Enthusiast",
  "Node.js Backend Builder",
  "UI/UX Problem Solver"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const fullText = titles[currentIndex];

    if (typing) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, currentIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-name">Jhonson Ayalew</h1>

        <h2 className="hero-title" aria-label={displayText}>
          {displayText}
          <span className="caret" />
        </h2>

        <p className="hero-text">
          I create scalable, high-performance web and mobile applications using Python, Django, React, and more.
        </p>

        <div className="hero-buttons">
          <Link to="projects" smooth={true} duration={800} className="btn">
            View My Work
          </Link>
          <Link to="contact" smooth={true} duration={800} className="btn btn-outline">
            Contact Me
          </Link>
        </div>

        <Link to="about" smooth={true} duration={800} className="scroll-down">
          <div className="scroll-arrow"></div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
