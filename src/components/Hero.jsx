import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-scroll';
    
    const Hero = ({ onDownloadResume }) => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-section section"
          id="home"
        >
          <h1>Hi, there! I’m Saicharan Reddy</h1>
          <p>Crafting solutions through code and data</p>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button>View Projects</button>
            </Link>
            <button onClick={onDownloadResume}>Download Resume</button>
          </div>
        </motion.div>
      );
    };
    
    export default Hero;
