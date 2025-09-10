import { motion } from 'framer-motion';
import './Projects.scss';

const projects = [
  {
    title: "Tobacco Leaf Disease Detection using ML",
    description: "Leading a 3-month project delivering an ML-based crop disease detection system. Defining project scope, goals, and success criteria using SMART goals and OKRs.",
    tags: ["Project Management", "Machine Learning", "Agile", "Jira"],
    image: "/projects/tobacco-ml.jpg",
    status: "Ongoing",
    role: "Project Manager",
    github: "https://github.com/labcodesss/Tobacco-Leaf-Disease-Detection-Using-Machine-Learning-" // Add your actual GitHub link
  },
  {
    title: "AI Automated Journal",
    description: "Multimodal AI-based journal integrating video, speech recognition (NLP), mood detection, and contextual insights with automatic logging features.",
    tags: ["AI", "NLP", "Python", "Computer Vision"],
    image: "/projects/ai-journal.jpg",
    status: "Ongoing",
    github: "https://github.com/labcodesss/MY-MY-AI-Automated-Journal" // Your actual GitHub link
  },
  {
    title: "Automated Harvest Machine",
    description: "AI-powered precision farming equipment for optimized crop harvesting with computer vision and machine learning integration.",
    tags: ["Python", "Computer Vision", "Random Forest", "IoT"],
    image: "/projects/harvest.jpg",
    github: "https://github.com/labcodesss/Automated-Harvest-Machine-for-Precision-Framing" // Add your actual GitHub link
  },
  {
    title: "Stock Price Prediction",
    description: "Machine learning model for forecasting stock market trends using LSTM networks and TensorFlow framework.",
    tags: ["Python", "TensorFlow", "LSTM", "Data Analysis"],
    image: "/projects/stock.jpg",
    github: "https://github.com/labcodesss/Stock-Price-Predication-using-ML-" // Add your actual GitHub link
  },
  {
    title: "Poorna Oils Ecommerce",
    description: "Full-featured online store for premium cooking oils with integrated payment processing and inventory management.",
    tags: ["Flask", "JavaScript", "Firebase", "E-commerce"],
    image: "/projects/poorna.jpg",
    github: "https://github.com/labcodesss/Ecommerce-website-for-Poorna-oils" // Add your actual GitHub link
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <motion.p
          className="featured-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.p>
        
        <motion.h2
          className="main-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Projects that showcase my project management and technical ability
        </motion.h2>
        
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          A collection of innovative solutions spanning project leadership, AI applications, and data science implementations.
        </motion.p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay"></div>
              {project.status && (
                <div className="project-status">
                  {project.status}
                </div>
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              {project.role && (
                <div className="project-role">
                  {project.role}
                </div>
              )}
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}