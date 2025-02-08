import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedDots from '../AnimatedDots/AnimatedDots';
import './AboutContent.css';

const AboutContent = ({ onButtonClick, handleContactClick }) => {

  return (
    <motion.div
    initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the right
    animate={{ x: 0, opacity: 1 }}       // Animate to its final position
    transition={{ type: 'tween', stiffness: 20, duration: 2 }}
    >
    <div className="About">
      <div className="About__wrp ">
        <button
          onClick={handleContactClick}
          className="contact-button">
          <img
            src={`${process.env.PUBLIC_URL}/Icons/contact.png`}
            alt="Contact"
            className="contact-image"
          />
        </button>
        <div className="About__item ">
          <div className="About__content">
            <span className="About__subtitle">About</span>
            <div className="About__title">Yasmina Elbernoussi</div>
            <div className="About__text">
            Software Engineer with a solid foundation in full-stack web and mobile development. Skilled in designing, developing, and deploying applications using React, Node.js, Laravel, and cloud technologies. Experienced in implementing CI/CD pipelines, optimizing system performance, and collaborating within Agile teams.
            </div>
            <div className="About__text">
            Holding a state engineer diploma, I am eager to contribute to dynamic environments by delivering impactful and scalable software solutions.
            </div>
            <div className="About__text">
            Passionate about advancing digital healthcare technologies and leveraging Health IT and AI to drive innovation and improve healthcare outcomes.
            </div>
            {/* <button className="About__button" onClick={onButtonClick}>READ MORE</button> */}
            <AnimatedDots onButtonClick={onButtonClick}/>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutContent;
