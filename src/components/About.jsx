import React from 'react';
    import { motion } from 'framer-motion';
    
    const About = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section"
          id="about"
        >
          <h2>About Me</h2>
          <p style={{ fontSize: '1.4em' }}>
            Hi, I'm Saicharan Reddy, a 3rd-year B.Tech Computer Science student passionate about software development and data analysis. I enjoy developing solutions using Java and uncovering insights through data analysis with Python. My goal is to contribute to innovative projects in a dynamic tech company while continuously honing my skills. I’m a lifelong learner who loves exploring new technologies, solving problems, and growing both personally and professionally. Let’s connect and create something amazing!
          </p>
        </motion.div>
      );
    };
    
    export default About;
