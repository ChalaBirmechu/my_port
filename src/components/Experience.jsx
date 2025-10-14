import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Experience
        </motion.h2>

        <div ref={ref} className="experience-content">
          <motion.div 
            className="experience-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/oict solutions.jpg" alt="Oict Solutions Internship" className="experience-img" />
          </motion.div>

          <motion.div 
            className="experience-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Internship at Oict Solutions</h3>
            <p>
              I completed a one-semester internship at Oict Solutions, where I worked on web development and mobile application development projects. This experience allowed me to apply my skills in real-world scenarios, collaborate with a professional team, and contribute to innovative solutions.
            </p>
            <ul>
              <li>Web Development</li>
              <li>Mobile Application Development</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
