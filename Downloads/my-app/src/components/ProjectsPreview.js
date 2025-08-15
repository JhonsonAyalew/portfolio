import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React, featuring animations and dark mode to showcase my work.',
    tech: ['React', 'CSS', 'Framer Motion'],
    live: '#',
    github: '#',
    image: '/bot.jpg'
  },
  {
    title: 'Peer-to-Peer Chat App',
    description: 'A desktop chat application built with React and Electron for real-time peer-to-peer communication.',
    tech: ['React', 'Electron', 'Node.js'],
    live: '#',
    github: '#',
    image: '/caht.png'
  },
  {
    title: 'Face Recognition Desktop App',
    description: 'A Python desktop application for face recognition and related tasks, providing accurate and fast results.',
    tech: ['Python', 'OpenCV', 'Tkinter'],
    live: '#',
    github: '#',
    image: '/face.jpg'
  },
  {
    title: 'Agro Hub Website',
    description: 'A web platform built with Django and HTML to help farmers manage and sell their products easily.',
    tech: ['Django', 'HTML', 'CSS'],
    live: '#',
    github: '#',
    image: '/agro.png'
  },
];


const Projects = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px 0px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollTo = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = direction === 'left' ? -250 : 250;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    checkScrollPosition();

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="scroll-controls">
          <button
            className={`scroll-arrow1 left ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scrollTo('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <FiArrowLeft />
          </button>

          <div
            className={`scroll-wrapper ${canScrollLeft ? 'show-left-shadow' : ''} ${
              canScrollRight ? 'show-right-shadow' : ''
            }`}
            ref={containerRef}
          >
            <motion.div
              className="scroll-container"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              {projects.map((project, i) => (
                <motion.div
                  className="project-card"
                  key={`${project.title}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.live} className="btn1" target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                      <a href={project.github} className="btn1 btn1-outline" target="_blank" rel="noreferrer">
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            className={`scroll-arrow1 right ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scrollTo('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
