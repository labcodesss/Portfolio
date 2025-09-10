// Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import './Contact.scss';

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Replace this with your actual Formspree form ID
    const formspreeId = 'https://formspree.io/f/xgvldzqw';
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Message sent successfully! I will reply within 24 hours.');
        e.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please email me directly at cwrkmouna@gmail.com');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-subtitle"
        >
          Get in touch through any of these channels
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="info-item">
              <div className="icon-container">
                <FaEnvelope className="icon" />
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:cwrkmouna@gmail.com">cwrkmouna@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-container">
                <FaPhone className="icon" />
              </div>
              <div>
                <h3>Phone</h3>
                <a href="tel:+918310864400">+91 8310864400</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-container">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div>
                <h3>Location</h3>
                <p>Hassan, Karnataka, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-container">
                <FaLinkedin className="icon" />
              </div>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/mounac" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/mounac
                </a>
              </div>
            </div>

           
          </motion.div>

          <motion.form
            className="contact-form-container"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <h3 className="form-title">Send Message</h3>
            <p className="form-subtitle">I'll respond soon.</p>

            <div className="contact-form">
              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input 
                    type="text" 
                    id="first-name"
                    name="name"
                    placeholder="Your first name" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name"
                    name="last-name"
                    placeholder="Your last name" 
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="your.email@example.com" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  placeholder="Project or question" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="How can I help you?" 
                  rows="5"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}