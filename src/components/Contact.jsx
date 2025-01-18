import React from 'react';
    import { motion } from 'framer-motion';
    import profilePic from '../assets/profile.jpg';
    import { FaEnvelope, FaPhone } from 'react-icons/fa';
    
    const Contact = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section"
          id="contact"
        >
          <h2>Contact</h2>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="contact-info">
            <p>
              <FaEnvelope style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              <strong>Email:</strong> <a href="mailto:saicharan2127@gmail.com">saicharan2127@gmail.com</a>
            </p>
            <p>
              <FaPhone style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              <strong>Phone:</strong> +91 7330757088
            </p>
          </div>
        </motion.div>
      );
    };
    
    export default Contact;
