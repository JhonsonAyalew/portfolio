import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './HackerButton.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="hero">
      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="intro">Hi, I’m</p>
        <h1 className="typewriter-text">
          <Typewriter
            words={['DEVELOPER', 'TRADER', 'ETHICAL HACKER']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        {/* Glowing Download Button */}
        <div className="hacker-wrapper">
        <button className="hacker-button">Download CV</button>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#" className="circle-icon"><FaGithub /></a>
          <a href="#" className="circle-icon"><FaLinkedin /></a>
          <a href="#" className="circle-icon"><FaTwitter /></a>
        </div>

        <div className="circles">
          <span></span><span></span><span></span><span></span>
        </div>
      </motion.div>

      {/* Avatar with glow */}
      <motion.div
        className="hero-img"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://i.ibb.co/sPHcZcF/hacker-avatar-blue.png"
          alt="Hacker Avatar"
        />
      </motion.div>
    </div>
  );
}
