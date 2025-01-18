import React, { useEffect } from 'react';
    import {  Route, Routes,  useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { FaGithub, FaLinkedin } from 'react-icons/fa';
    import About from './components/About';
    import Education from './components/Education';
    import Projects from './components/Projects';
    import Experience from './components/Experience';
    import Skills from './components/Skills';
    import Certifications from './components/Certifications';
    import Contact from './components/Contact';
    import { Link } from 'react-scroll';
    import Hero from './components/Hero';
    
    const App = () => {
      const location = useLocation();
    
      useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.section');
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
    
            if (scrollPosition > sectionTop - windowHeight + sectionHeight / 4) {
              section.classList.add('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
      }, [location]);
    
      const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/src/assets/resume.pdf';
        link.download = 'Saicharan_Reddy_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
      return (
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <nav>
              <ul>
                <li>
                  <Link to="home" smooth={true} duration={500}  activeClassName="active">Home</Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}  activeClassName="active">About</Link>
                </li>
                <li>
                  <Link to="skills" smooth={true} duration={500}  activeClassName="active">Skills</Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500}  activeClassName="active">Projects</Link>
                </li>
                <li>
                  <Link to="experience" smooth={true} duration={500}  activeClassName="active">Experience</Link>
                </li>
                <li>
                  <Link to="education" smooth={true} duration={500}  activeClassName="active">Education</Link>
                </li>
                 <li>
                  <Link to="certifications" smooth={true} duration={500}  activeClassName="active">Certifications</Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}  activeClassName="active">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="container">
              <Routes>
                <Route path="/" element={<><Hero onDownloadResume={handleDownloadResume} /><About /><Skills /><Projects /><Experience /><Education /><Certifications /><Contact /></>} />
              </Routes>
            </div>
            <footer style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '20px' }}>
              <div className="social-links">
                <a href="https://github.com/saicharan2127" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/saicharan2127/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
              <p style={{ fontSize: '0.8em', marginTop: '10px' }}>© 2025 Saicharan Reddy</p>
            </footer>
          </motion.div>
        
      );
    };
    
    export default App;
