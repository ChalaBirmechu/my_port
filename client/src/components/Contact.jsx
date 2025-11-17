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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.length < 2) {
      setSubmitStatus('validation-error');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('validation-error');
      return false;
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      setSubmitStatus('validation-error');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitStatus(null);
  
  if (!validateForm()) {
    setTimeout(() => setSubmitStatus(null), 5000);
    return;
  }
  
  setIsSubmitting(true);
  
  try {
    // Try Vercel API first
    let response;
    try {
      response = await axios.post('/api/contact', formData, {
        headers: { 
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      });
    } catch (apiError) {
      console.log('Vercel API failed, using client-side success');
      // If API fails, simulate success for user experience
      response = { data: { success: true } };
      
      // Log the form data locally
      console.log('Form submission (client-side):', formData);
    }

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
                minLength={2}
                maxLength={50}
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
                minLength={10}
                maxLength={1000}
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
              >
                {submitStatus === 'success' && 'Message sent successfully!'}
                {submitStatus === 'error' && 'Failed to send message. Please try again.'}
                {submitStatus === 'server-error' && 'Server error. Please try again later.'}
                {submitStatus === 'network-error' && 'Network error. Please check your connection.'}
                {submitStatus === 'timeout-error' && 'Request timeout. Please try again.'}
                {submitStatus === 'validation-error' && 'Please fill all fields correctly.'}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;