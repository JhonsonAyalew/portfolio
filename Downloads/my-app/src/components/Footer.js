import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { FaReact, FaRegLightbulb } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38B2AC' },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              John Doe
            </motion.h3>
            <p>Turning ideas into digital reality</p>

            <div className="footer-social">
              {[
                { icon: <FiGithub />, url: 'https://github.com', label: 'GitHub' },
                { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FiTwitter />, url: 'https://twitter.com', label: 'Twitter' },
                { icon: <FiMail />, url: 'mailto:john@example.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5, color: '#3a86ff' }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>
              <FaRegLightbulb className="bulb-icon" />
              Stay Updated
            </h4>
            <p>Subscribe to my newsletter for the latest projects and insights</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>

          <div className="footer-tech">
            <h4>Tech I Work With</h4>
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-item"
                  onHoverStart={() => setHoveredTech(index)}
                  onHoverEnd={() => setHoveredTech(null)}
                  initial={{ scale: 1 }}
                  animate={{
                    scale: hoveredTech === index ? 1.1 : 1,
                    color: hoveredTech === index ? tech.color : '#64748b'
                  }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <motion.div
            className="made-with-love"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Made with <FiHeart className="heart-icon" /> by John Doe
          </motion.div>

          <div className="tech-stack-label">
            <span>Powered by</span>
            <div className="tech-icons">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, color: tech.color }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="copyright">
            &copy; {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
