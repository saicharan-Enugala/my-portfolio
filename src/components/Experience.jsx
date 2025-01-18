import React from 'react';
    import { motion } from 'framer-motion';
    import { FaBriefcase, FaTrophy } from 'react-icons/fa';
    
    const Experience = () => {
      const experiences = [
        {
          title: 'AIoT Intern',
          organization: 'National Institute Of Technology, Warangal, India',
          duration: 'May 2024 – June 2024',
          description: 'Established a facial recognition attendance system that drastically improved student identification accuracy; this initiative transformed the attendance process for 2,000+ students and provided reliable data for academic reporting. Refined the face recognition algorithm, reducing processing time by 15% and significantly improving system responsiveness. Integrated the system with existing attendance management platforms, streamlining operations and enhancing overall efficiency by 25%.',
          certificate: '/src/assets/nit_internship.jpg',
        },
        {
          title: 'Machine Learning Intern',
          organization: 'AICTE Virtual Internship, AWS Academy',
          duration: 'Sep 2023 – Nov 2023',
          description: 'Completed a virtual internship focusing on AI and Machine Learning through the AICTE on AWS Academy. Acquired hands-on experience in machine learning techniques and applications.',
          certificate: '/src/assets/aicte_internship.pdf',
        },
        {
          title: 'Achievements',
          organization: 'Demux Hackathon',
          duration: '',
          description: 'Secured 4th place in the Demux Hackathon for developing an innovative solution for real-time data analysis.',
          certificate: '/src/assets/demux_hackathon.jpg',
        },
      ];
    
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section"
          id="experience"
        >
          <h2>Experience</h2>
          <ul className="experience-list">
            {experiences.map((exp, index) => (
              <motion.li key={index}>
                <motion.div
                  className="experience-card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3>{exp.title}</h3>
                  <p>
                    <strong>{exp.organization}</strong>
                    <br />
                    {exp.duration}
                  </p>
                  <p>{exp.description}</p>
                  {exp.certificate && (
                    <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                      Certificate
                    </a>
                  )}
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      );
    };
    
    export default Experience;
