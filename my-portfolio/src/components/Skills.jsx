// Skills.jsx
import { motion } from 'framer-motion';
import './Skills.scss';

const technicalSkills = [
  {
    category: 'Project Management',
    skills: [
      'Jira', 'Trello', 'Asana', 'ClickUp', 'Microsoft Project', 
      'Smartsheet', 'Notion', 'Confluence', 'Monday.com', 'Slack', 'MS Teams'
    ],
    color: '#6366f1',
    icon: '📊'
  },
  {
    category: 'AI Skills',
    skills: [
      'Python', 'NLP', 'Hugging Face', 'OpenAI'
    ],
    color: '#10b981',
    icon: '🤖'
  },
  {
    category: 'Data Science',
    skills: [
      'Python', 'SQL', 'NumPy', 'Pandas', 'Matplotlib', 
      'Seaborn', 'Jupyter Notebook', 'Google Colab', 'MLflow'
    ],
    color: '#f59e0b',
    icon: '📈'
  }
];

const softSkills = [
  { 
    name: 'Project Leadership', 
    description: 'Leading cross-functional teams to deliver projects on time and within budget' 
  },
  { 
    name: 'Stakeholder Management', 
    description: 'Building strong relationships with clients, team members, and executives' 
  },
  { 
    name: 'Agile Methodology', 
    description: 'Implementing Scrum and Kanban frameworks for efficient project delivery' 
  },
  { 
    name: 'Risk Management', 
    description: 'Identifying, assessing, and mitigating project risks effectively' 
  },
  { 
    name: 'Strategic Planning', 
    description: 'Developing comprehensive project plans aligned with business objectives' 
  },
  { 
    name: 'Team Collaboration', 
    description: 'Fostering productive teamwork and communication across departments' 
  },
  { 
    name: 'Problem-Solving', 
    description: 'Analyzing complex project challenges and developing effective solutions' 
  },
  { 
    name: 'Communication', 
    description: 'Articulating project status and technical concepts to diverse audiences' 
  }
];

export default function Skills() {
  // Function to handle resume download
  const downloadResume = (resumeType) => {
    // Path to your resume files in the public folder
    const resumePaths = {
      ai: '/resumes/Mouna_C__Resume.pdf',
      pm: '/resumes/Mouna_C_Project_Management_Resume.pdf'
    };
    
    const link = document.createElement('a');
    link.href = resumePaths[resumeType];
    link.download = resumePaths[resumeType].split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Technical <span>Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {technicalSkills.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ '--category-color': category.color }}
            >
              <div className="card-header">
                <div className="category-icon">
                  <span className="category-emoji">{category.icon}</span>
                </div>
                <h3>{category.category}</h3>
              </div>
              <div className="skills-container">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item"
                    whileHover={{ 
                      scale: 1.05,
                      color: category.color
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="skill-text">{skill}</span>
                  </motion.div>
                ))}
              </div>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title soft-skills-title"
        >
          Leadership & <span>Soft Skills</span>
        </motion.h2>
        
        <div className="soft-skills-scroll-container">
          <div className="soft-skills-track">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="soft-skill-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                </div>
                <p>{skill.description}</p>
                <div className="skill-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title download-title"
        >
          Download <span>Resume</span>
        </motion.h2>
        
        <div className="download-container">
          <motion.div 
            className="download-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="download-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>AI/ML Resume</h3>
            <p>Focus on AI, Machine Learning, and Data Science projects</p>
            <button 
              className="download-btn" 
              onClick={() => downloadResume('ai')}
            >
              Download PDF
            </button>
          </motion.div>
          
          <motion.div 
            className="download-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="download-icon">
              <i className="fas fa-file-invoice"></i>
            </div>
            <h3>Project Management Resume</h3>
            <p>Focus on project management and leadership experience</p>
            <button 
              className="download-btn" 
              onClick={() => downloadResume('pm')}
            >
              Download PDF
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}