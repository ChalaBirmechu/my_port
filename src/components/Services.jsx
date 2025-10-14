import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaServer, 
  FaMobileAlt, 
  FaCloud,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaFlask,
  FaAndroid,
  FaApple,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Creating beautiful and responsive user interfaces with modern technologies',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Vue', icon: FaVuejs },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'JavaScript', icon: FaJs },
        { name: 'TailwindCSS', icon: FaBootstrap }
      ]
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: FaCode },
        { name: 'Django', icon: FaPython },
        { name: 'Spring Boot', icon: FaJava },
        { name: 'Flask', icon: FaFlask }
      ]
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Development',
      description: 'Developing cross-platform and native mobile applications',
      technologies: [
        { name: 'Flutter', icon: FaMobileAlt },
        { name: 'React Native', icon: FaReact },
        { name: 'Android', icon: FaAndroid },
        { name: 'iOS', icon: FaApple }
      ]
    },
    {
      icon: FaCloud,
      title: 'DevOps & Deployment',
      description: 'Streamlining development and deployment processes',
      technologies: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'Docker', icon: FaDocker },
        { name: 'AWS', icon: FaAws },
        { name: 'Heroku', icon: FaCloud },
        { name: 'CI/CD', icon: FaCode }
      ]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What I Offer
        </motion.h2>

        <div ref={ref} className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="service-box"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="service-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon />
                </motion.div>
                
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <ul className="tech-stack">
                  {service.technologies.map((tech, techIndex) => {
                    const TechIcon = tech.icon;
                    return (
                      <motion.li
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      >
                        <TechIcon />
                        <span>{tech.name}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
