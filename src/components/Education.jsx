import React from 'react';
    import { motion } from 'framer-motion';
    import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
    
    const Education = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section"
          id="education"
        >
          <h2>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ marginBottom: '10px' }}>
              <FaUniversity style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              <strong>Bachelor of Technology in Computer Science</strong>
              <br />
              SR University, Telangana, India
              <br />
              <strong>CGPA:</strong> 9.2 (Oct 2022 – May 2026)
            </p>
            <p style={{ marginBottom: '10px' }}>
              <FaGraduationCap style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              <strong>MPC Intermediate</strong>
              <br />
              SR College for Boys, Hanamkonda
              <br />
              <strong>Percentage:</strong> 95% (Jul 2020 – Jul 2022)
            </p>
            <p>
              <FaGraduationCap style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              <strong>SSC</strong>
              <br />
              Adhitya Digi High School, Hanamkonda
              <br />
              <strong>GPA:</strong> 10 (Jun 2019 – Jun 2020)
            </p>
          </div>
        </motion.div>
      );
    };
    
    export default Education;
