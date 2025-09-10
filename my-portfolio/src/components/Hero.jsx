import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Hero.scss';

export default function Hero() {
  const name = "Mouna C";
  const title = "Project Management & AI/Data Science";
  const description = "Aspiring project manager and tech enthusiast with experience leading cross-functional projects in AI and data science. Skilled at combining innovation, collaboration, and problem-solving to deliver impactful results.";

  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero"
      style={{ paddingTop: '70px' }}
    >
      <div className="hero-container">
        {/* Text Content (Left Side) */}
        <div className="hero-text">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi, I'm{'  '}
            <span className="name-animation">
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="title"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="subtitle"
          >
            {description}
          </motion.p>

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="contact-items">
              <a href="tel:+918310864400" className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 8310864400</span>
              </a>
              
              <a href="mailto:cwrkmouna@gmail.com" className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>cwrkmouna@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a href="https://www.linkedin.com/in/mouna-c-wrk1711/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/labcodesss" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </motion.div>
        </div>

        {/* Image (Right Side) with Glowing Border */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="profile-glow"></div>
          <img 
            src="/images/mounac.jpg"
            alt="Mouna C"
            className="profile-image"
          />
        </motion.div>
      </div>

      <div className="scroll-prompt">
        <FaArrowDown className="bounce" />
        <span>SCROLL DOWN</span>
      </div>
    </motion.section>
  );
}