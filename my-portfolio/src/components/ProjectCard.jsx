import { motion } from 'framer-motion'
import './ProjectCard.scss'

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -10 }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}