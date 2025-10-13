import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Web Platform',
      description: 'A full-stack e-commerce site built with React, Node.js, Express, and MongoDB. Features include cart management, user authentication, and payment gateway integration.',
      image: '/images/ecom.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/ChalaBirmechu/Sabaf_Software_Website/',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'House Rental Management System',
      description: 'Built with Frontend:React + Vite Backend:Node.js + Express and Bootstrap featuring posts, comments, likes, messaging, and role-based access control.',
      image: '/images/houseweb.jpg',
      technologies: ['Telegrambot', 'Bootstrap', 'MongoDB','Chatbot'],
      githubUrl: 'https://frontend-orcin-xi-42.vercel.app/',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management Mobile App',
      description: 'Cross-platform app developed using Flutter and Firebase for real-time task tracking, notifications, and offline data support.',
      image: '/images/mob app.jpg',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      githubUrl: 'https://github.com/ChalaBirmechu',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Social Networking Website',
      description: 'Built with Django and Bootstrap featuring posts, comments, likes, messaging, and role-based access control.',
      image: '/images/social.jpg',
      technologies: ['Django', 'Bootstrap', 'Python', 'SQLite'],
      githubUrl: 'https://chalabirmechu.github.io/chala_port/',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Inventory Management System',
      description: 'Enterprise-level Java/Spring Boot backend with Angular frontend for managing products, users, and reports.',
      image: '/images/photo.jpg',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
      githubUrl: 'https://chalabirmechu.github.io/chala_port/',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="image-shine" aria-hidden="true" />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-links">
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${project.title} source code on GitHub`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Code
                    </motion.a>
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Open live demo of ${project.title}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
