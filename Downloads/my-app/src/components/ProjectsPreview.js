import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Price Tracker',
    description:
      'A web app that tracks and monitors cryptocurrency or stock prices in real-time with auto updates and data visualization.',
    tech: ['Python', 'Requests', 'API', 'JSON'],
    live: '#',
    github: 'https://github.com/JhonsonAyalew/price-tracker0',
    image: '/price-tracker.jpg',
  },
  {
    title: 'Scalping Bot',
    description:
      'An automated trading bot that performs high-frequency trading strategies for crypto markets, built for accuracy and efficiency.',
    tech: ['Python', 'Binance API', 'Pandas'],
    live: '#',
    github: 'https://github.com/JhonsonAyalew/scalping-bot',
    image: '/scalping-bot.jpg',
  },
  {
    title: 'Scape Transform Notify',
    description:
      'A data automation tool that scrapes web data, transforms it, and sends real-time notifications to users through messaging services.',
    tech: ['Python', 'BeautifulSoup', 'Requests'],
    live: '#',
    github: 'https://github.com/JhonsonAyalew/scape-transform-notify',
    image: '/scape-transform.jpg',
  },
  {
    title: 'CSV DB Utility',
    description:
      'A utility application that manages, converts, and integrates CSV data with databases for quick analysis and processing.',
    tech: ['Python', 'SQLite', 'CSV'],
    live: '#',
    github: 'https://github.com/JhonsonAyalew/csv-db-utility',
    image: '/csv-db.jpg',
  },
  {
    title: 'Telegram Social',
    description:
      'A Telegram-based social automation app that interacts with groups and users to automate posting, engagement, and notifications.',
    tech: ['Python', 'Telethon', 'AsyncIO'],
    live: '#',
    github: 'https://github.com/JhonsonAyalew/telegram-social',
    image: '/telegram-social.jpg',
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
