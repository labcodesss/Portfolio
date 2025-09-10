import { motion } from 'framer-motion';
import { useRef } from 'react';
import './Certifications.scss';

export default function Certifications() {
  const scrollContainerRef = useRef(null);

  const achievements = [
    {
      id: 1,
      type: 'Professional Certificate',
      title: 'Google Project Management: Professional Certificate',
      issuer: 'Coursera',
      date: '2025',
      description: 'Comprehensive project management training covering agile methodologies, stakeholder management, and project lifecycle.',
      link: 'https://drive.google.com/drive/folders/1fOZf7TyOoxK5KKEhDpdk0k4A_b-W8F-r?usp=sharing'
    },
    {
      id: 2,
      type: 'Internship',
      title: 'Data Science Intern',
      company: 'Plasmid Innovation Pvt Ltd',
      date: '2025',
      description: 'Worked on data analysis, machine learning models, and data visualization projects for real-world business problems.',
      link: 'https://drive.google.com/file/d/1gkwoUAC5R18YIfCl4j4TlBJqM4h1LqBH/view?usp=sharing'
    },
    {
      id: 3,
      type: 'Publication',
      title: 'Automated Harvest Machine for Precision Farming',
      publisher: 'International Journal of Agricultural Engineering',
      date: '2025',
      description: 'Research paper on developing an AI-powered automated harvesting system for precision agriculture.',
      link: 'https://ijsrem.com/download/automated-harvest-machine-for-precision-farming/'
    },
    {
      id: 4,
      type: 'Hackathon',
      title: 'Social Innovation Inspo "INSPIRE 2022"',
      organizer: 'Tech Innovation Summit',
      date: '2022',
      description: 'Won 2nd place in national hackathon for developing a sustainable social innovation solution.',
      link: 'https://drive.google.com/file/d/1-UOsSnHcqIFQmRiOTor3a9RuzbcNxwre/view?usp=sharing'
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Function to determine link text based on achievement type
  const getLinkText = (type) => {
    switch(type.toLowerCase()) {
      case 'professional certificate':
        return 'View Certificate';
      case 'internship':
        return 'View Certificate';
      case 'publication':
        return 'Read Publication';
      case 'hackathon':
        return 'View Certificate';
      case 'certification':
        return 'Verify Certification';
      default:
        return 'View Details';
    }
  };

  return (
    <motion.section 
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="certifications-section"
    >
      <h2 className="section-title">Certifications & Achievements</h2>
      
      <div className="certifications-container">
        <button className="scroll-btn scroll-left" onClick={scrollLeft} aria-label="Scroll left">
          ‹
        </button>
        
        <div className="certifications-scroll" ref={scrollContainerRef}>
          {achievements.map((achievement) => (
            <motion.div 
              key={achievement.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="achievement-card"
            >
              <div className="achievement-header">
                <h3>{achievement.title}</h3>
                <span className="achievement-type">{achievement.type}</span>
              </div>
              <div className="achievement-details">
                <p className="achievement-meta">
                  {achievement.issuer || achievement.company || achievement.publisher || achievement.organizer} • {achievement.date}
                </p>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.link && (
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                    {getLinkText(achievement.type)}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="scroll-btn scroll-right" onClick={scrollRight} aria-label="Scroll right">
          ›
        </button>
      </div>
    </motion.section>
  );
}