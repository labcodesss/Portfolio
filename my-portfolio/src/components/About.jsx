// About.jsx
import { motion } from 'framer-motion';
import './About.scss';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Main Content */}
        <motion.div 
          className="main-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Aspiring <span className="highlight-text">Project Manager</span> & AI Enthusiast
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="intro-text"
          >
            I'm passionate about leading innovative projects at the intersection of AI and data science. 
            My journey combines project management expertise with technical knowledge to deliver impactful 
            solutions that bridge business needs with cutting-edge technology.
          </motion.p>
          
          <div className="skills-row">
            {['Project Management', 'AI & Machine Learning', 'Data Science', 'Problem Solving', 'Cross-functional Collaboration'].map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  color: '$primary'
                }}
              >
                {skill}
                <div className="skill-underline"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Focus Section */}
        <div className="info-section">
          {/* Education Box */}
          <motion.div
            className="info-box education-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 25px rgba(100, 108, 255, 0.2)'
            }}
          >
            <div className="box-header">
              <h3>Education</h3>
              <div className="box-icon">🎓</div>
            </div>
            <div className="box-content">
              <h4>Bachelor of Engineering</h4>
              <p>Computer Science & Engineering</p>
              <p>Malnad College of Engineering</p>
              <p>CGPA: 8.61/10</p>
              <p>2021 - 2025</p>
            </div>
          </motion.div>

          {/* Current Focus Box */}
          <motion.div
            className="info-box focus-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 25px rgba(100, 108, 255, 0.2)'
            }}
          >
            <div className="box-header">
              <h3>Current Focus</h3>
              <div className="box-icon">✨</div>
            </div>
            <div className="box-content">
              <ul>
                <li>Project Management Methodologies</li>
                <li>AI & Machine Learning Applications</li>
                <li>Data Analysis & Visualization</li>
                <li>Stakeholder Management</li>
                <li>Agile Project Delivery</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}