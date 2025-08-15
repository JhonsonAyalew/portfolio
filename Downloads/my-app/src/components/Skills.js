import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiExpress, SiDjango, SiReact, SiReactrouter } from 'react-icons/si';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'JavaScript', icon: <FaJs />, level: 95 },
      { name: 'React', icon: <SiReact />, level: 90 },
      { name: 'React Native', icon: <SiReactrouter />, level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
      { name: 'Express', icon: <SiExpress />, level: 80 },
      { name: 'Django', icon: <SiDjango />, level: 75 },
    ],
  },
  {
    category: 'Tools & More',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt />, level: 90 },
      { name: 'Figma', icon: <FaFigma />, level: 80 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px", amount: 0.1 });

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Expertise
        </motion.h2>

        <div className="skills-grid">
          {skillsData.map((category) => (
            <div className="skill-category" key={category.category}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <motion.div
                    className="skill-item"
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-details">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2 }}
                        />
                      </div>
                    </div>
                    <span className="skill-percent">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
