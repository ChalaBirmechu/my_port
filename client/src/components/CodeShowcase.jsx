import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import './CodeShowcase.css';

const CodeShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const codeSnippets = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      language: 'React.js',
      code: `const Portfolio = () => {
  const [theme, setTheme] = useState('light');
  
  return (
    <div className="modern-portfolio">
      <Header />
      <Projects />
    </div>
  );
};`,
      description: 'Modern React components with hooks'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      language: 'Node.js',
      code: `app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await sendEmail({ name, email, message });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
      description: 'RESTful API with error handling'
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      language: 'MongoDB',
      code: `const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  createdAt: { type: Date, default: Date.now }
});`,
      description: 'Scalable data modeling'
    },
    {
      icon: FaCloud,
      title: 'DevOps & Deployment',
      language: 'Docker',
      code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
      description: 'Containerized applications'
    }
  ];

  return (
    <section id="code-showcase" className="code-showcase section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Code Excellence
        </motion.h2>

        <div ref={ref} className="code-grid">
          {codeSnippets.map((snippet, index) => {
            const Icon = snippet.icon;
            return (
              <motion.div
                key={index}
                className="code-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="code-header">
                  <Icon className="code-icon" />
                  <div className="code-title-section">
                    <h3>{snippet.title}</h3>
                    <span className="code-language">{snippet.language}</span>
                  </div>
                </div>
                
                <div className="code-content">
                  <pre><code>{snippet.code}</code></pre>
                </div>
                
                <div className="code-description">
                  <p>{snippet.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
