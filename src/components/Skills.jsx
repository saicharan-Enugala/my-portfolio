import React from 'react';
    import { motion } from 'framer-motion';
    import { FaCode, FaTools, FaDatabase } from 'react-icons/fa';
    import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiCplusplus, SiMysql, SiGithub, SiVuedotjs, SiTailwindcss } from "react-icons/si";
    
    const Skills = () => {
      const skills = [
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Java', icon: <SiJavascript /> },
        { name: 'SQL', icon: <SiMysql /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Vue.js', icon: <SiVuedotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ];
    
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section"
          id="skills"
        >
          <h2>Skills</h2>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                style={{ width: 'auto', height: 'auto', flexDirection: 'row', padding: '10px', justifyContent: 'flex-start' }}
              >
                {skill.icon}
                <span style={{ marginLeft: '5px' }}>{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      );
    };
    
    export default Skills;
