import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: '5+', text: 'Projects Completed' },
    { number: '3+', text: 'Happy Clients' },
    { number: '100%', text: 'Satisfaction' }
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/ch.png" alt="Chala Birmechu" className="about-img" />
            <motion.div 
              className="experience-badge"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="years">2+</span>
              <span className="text">Years Experience</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Full Stack & Mobile Developer</h3>
            <p>
              I am a passionate software engineer specializing in full-stack web development and mobile application development.
              With hands-on experience in both frontend & backend technologies as well as native and cross-platform mobile apps,
              I bring ideas to life through clean code and scalable architecture.
            </p>
            <p>
              My goal is to build efficient, user-friendly, and future-ready applications that solve real-world problems.
            </p>

            <motion.div 
              className="expertise-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="expertise-item">
                <div className="expertise-icon">🚀</div>
                <div className="expertise-text">
                  <h4>Scalable Solutions</h4>
                  <p>Building robust applications that grow with your business</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">⚡</div>
                <div className="expertise-text">
                  <h4>Performance Optimized</h4>
                  <p>Delivering lightning-fast user experiences</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">🔒</div>
                <div className="expertise-text">
                  <h4>Secure by Design</h4>
                  <p>Implementing best security practices</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-text">{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="about-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a 
                href="https://t.me/Barraaqa_barii_lafaa" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                Hire Me
              </motion.a>
              
              <motion.button 
                onClick={scrollToProjects}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
