import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import './AboutContent.css';

const AboutContent = ({ onButtonClick }) => {

  return (
    <motion.div
    initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the right
    animate={{ x: 0, opacity: 1 }}       // Animate to its final position
    transition={{ type: 'tween', stiffness: 20, duration: 2 }}
    >
    <div className="About">
      <div className="About__wrp ">
        <div className="About__item ">
          <div className="About__content">
            <span className="About__subtitle">About</span>
            <div className="About__title">Yasmina Elbernoussi</div>
            <div className="About__text">
              I am a Junior Software Engineer specializing in both mobile and web application development. I have hands-on experience with various technologies, including Ionic and Flutter for mobile development, and HTML, JavaScript, CSS, Spring Boot, and Laravel for web development. I am eager to leverage my versatile skill set in a dynamic environment to deliver innovative software solutions.
            </div>
            <div className="About__text">
              As a dedicated software engineer with a state engineer diploma, I am passionate about advancing digital healthcare technologies and automation. My research interests lie at the intersection of Health IT and AI, with a focus on improving healthcare outcomes through digital transformation.
            </div>
            <button className="About__button" onClick={onButtonClick}>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutContent;
