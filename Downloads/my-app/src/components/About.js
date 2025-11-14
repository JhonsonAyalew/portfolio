import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only animate the first time
    margin: "-100px 0px -100px 0px",
    amount: 0.2
  });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="about-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I’m a full-stack developer with experience in both frontend and backend technologies.
              My core skills include <strong>Python, Django, React, React Native, Node.js, HTML, CSS, JavaScript</strong>,
              and I have a solid understanding of version control with GitHub and graphic design principles.
            </p>
            <p>
              I focus on creating clean, scalable, and user-friendly solutions that bridge functionality
              and aesthetics. Whether it's crafting interactive UI components or building robust APIs,
              I’m driven by the challenge of solving real-world problems through technology.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-frame">
              <img src="1763139402296.jpg" alt="Your Name" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
