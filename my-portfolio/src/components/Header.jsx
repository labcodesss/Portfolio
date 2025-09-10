// Header.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import './Header.scss';

export default function Header() {
  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header"
    >
      <nav className="nav-container">
        {/* Logo/Name */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="logo"
        >
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            MOUNA
          </Link>
        </motion.div>

        {/* Navigation Links + Theme Toggle */}
        <div className="nav-right">
          <ul className="nav-links">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  activeClass="active"
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}