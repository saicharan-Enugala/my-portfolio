import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { FaCertificate } from 'react-icons/fa';
    
    const Certifications = () => {
      const [showCert, setShowCert] = useState({
        'Data Structures and Algorithms': false,
        'Database Management System': false,
        'Azure AI Fundamentals': false,
        'IBM Machine Learning': false,
      });
    
      const certifications = [
        {
          name: 'Data Structures and Algorithms',
          link: '/src/assets/data_structures_and_algorithms.pdf',
        },
        {
          name: 'Database Management System',
          link: '/src/assets/database_management_system.pdf',
        },
        {
          name: 'Azure AI Fundamentals',
          link: '/src/assets/azure_ai_fundamentals.pdf',
        },
        {
          name: 'IBM Machine Learning',
          link: '/src/assets/ibm_machine_learning.pdf',
        },
      ];
    
      const handleCertClick = (name) => {
        setShowCert((prevShowCert) => ({
          ...prevShowCert,
          [name]: !prevShowCert[name],
        }));
      };
    
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section"
          id="certifications"
        >
          <h2>Certifications</h2>
          <ul className="certification-list">
            {certifications.map((cert, index) => (
              <li key={index}>
                <FaCertificate style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                <span
                  style={{ textDecoration: 'underline', cursor: 'pointer', color: '#00ffff' }}
                  onClick={() => handleCertClick(cert.name)}
                >
                  {cert.name}
                </span>
                {showCert[cert.name] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: 'absolute', zIndex: 10, backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '5px' }}
                  >
                    <iframe src={cert.link} width="300px" height="200px" title={cert.name} />
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      );
    };
    
    export default Certifications;
