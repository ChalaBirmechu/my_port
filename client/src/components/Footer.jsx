import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Frontend Development', href: '#services' },
      { name: 'Backend Development', href: '#services' },
      { name: 'Mobile Development', href: '#services' },
      { name: 'DevOps & Deployment', href: '#services' }
    ]
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://et.linkedin.com/in/ch%C3%A0l%C3%A0-birmechu-442057360', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/ChalaBirmechu', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com/ChalaBirmechu', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:chalabirmechu@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <span className="logo-text">Chala Birmechu</span>
              <p className="footer-tagline">Full Stack & Mobile Developer</p>
            </div>
            <p className="footer-description">
              Passionate about creating innovative solutions and delivering exceptional user experiences through clean code and modern technologies.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="footer-links-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="footer-links-group">
              <h3>Quick Links</h3>
              <ul>
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                    >
                      <FaChevronRight />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h3>Services</h3>
              <ul>
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(service.href);
                      }}
                    >
                      <FaChevronRight />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h3>Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <span>Addis Ababa, Ethiopia</span>
                </li>
                <li>
                  <FaPhone />
                  <span>+251915950217</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>chalabirmechu@gmail.com</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Chala Birmechu. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
