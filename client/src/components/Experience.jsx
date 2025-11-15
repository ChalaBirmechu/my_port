import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const experiences = [
  {
    logo: '/images/logo.jpg',
    alt: 'Injibara University',
    title: 'BSc in Software Engineering — Injibara University',
    date: '2022 - Now',
    description:
      'Studying Software Engineering with a focus on MERN-Stack, Full-Stack Web Development, and Mobile App Development. Participated in tech events and team projects.',
    skills: [
      'Software Engineering Fundamentals',
      'MERN Stack & Full-Stack Web Development',
      'Mobile App Development',
      'Participation in Tech Events',
    ],
  },
  {
    logo: '/images/oict solutions.jpg',
    alt: 'Oict Solutions Internship',
    title: 'Internship at Oict Solutions',
    date: 'Internship',
    description:
      'One-semester internship at Oict Solutions, working on web and mobile development with a professional team.',
    skills: [
      'Web Development',
      'Mobile App Development',
      'Team Collaboration',
      'Problem Solving',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Experience & Education
        </motion.h2>
        {experiences.map((exp, idx) => (
          <motion.div
            ref={idx === 0 ? ref : undefined}
            className="experience-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <div className="card-flex">
              <div className="experience-image">
                <img src={exp.logo} alt={exp.alt} className="experience-img small-logo" />
              </div>
              <span className="vertical-divider" aria-hidden="true"></span>
              <div className="experience-text">
                <h3>{exp.title}</h3>
                <p><strong>{exp.date}</strong></p>
                <p>{exp.description}</p>
                <ul>
                  {exp.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
