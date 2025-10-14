import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email via backend API
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: ['Addis Ababa, Ethiopia']
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+251915950217', '+251941274261']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['chalabirmechu@gmail.com']
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div ref={ref} className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className="contact-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="contact-icon" />
                  <h3>{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="message">Your Message</label>
            </div>

            <motion.button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus && (
              <motion.div 
                className={`submit-status ${submitStatus}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
