import React from 'react';
    import { motion } from 'framer-motion';
    import { FaCode } from 'react-icons/fa';
    
    const Projects = () => {
      const projects = [
        {
          title: 'Student Record Management',
          description: 'Engineered a customized student record management system that integrated with existing databases; achieved 30% reduction in manual workload, allowing staff to focus on enhancing student engagement and support initiatives. Innovated a robust automated reporting solution that integrated seamlessly with existing databases, resulting in a significant reduction of 20% in administrative tasks while enabling teams to generate reports 25% quicker for improved decision-making.',
          techStack: ['Python', 'SQL'],
          link: 'https://github.com/saicharan2127/student-record-management',
        },
         {
          title: 'Online Reservation System',
          description: 'Created a console-based Online Reservation System in Java, supporting over 100 users to make, view, and cancel reservations efficiently, applying object-oriented programming principles. Implemented key classes, including Reservation and Reservation System, leveraging ArrayLists for managing up to 500 reservations, improving data handling efficiency by 20%. Designed a user-friendly console interface using the Scanner class, reducing user input errors by 15% and improving reservation processing time by 25% with real-time feedback.',
          techStack: ['Java'],
          link: 'https://github.com/saicharan2127/online-reservation-system',
        },
        {
          title: 'Hypothyroid Prediction',
          description: 'Formulated a machine learning model for hypothyroid prediction utilizing CSV data, achieving 92% accuracy through advanced feature selection techniques; model utilized by 15 healthcare professionals to enhance patient diagnosis efficiency. Optimized data, handling missing values, normalization, boosting prediction accuracy by 15%. Implemented visual analytics tools to analyze model features, generating insights that informed strategic research decisions; this initiative directly contributed to the identification of 10+ new factors influencing hypothyroid conditions.',
          techStack: ['Python', 'Jupyter Notebook', 'Scikit-learn'],
          link: 'https://github.com/saicharan2127/hypothyroid-prediction',
        },
      ];
    
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section"
          id="projects"
        >
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'none' }}>
                  <FaCode style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
              <ul>
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button>View More Projects</button>
          </div>
        </motion.div>
      );
    };
    
    export default Projects;
