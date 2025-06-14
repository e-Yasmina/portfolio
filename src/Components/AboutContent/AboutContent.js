import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedDots from '../AnimatedDots/AnimatedDots';
import './AboutContent.css';
import { s } from 'framer-motion/client';
import { slideInFromLeft } from '../../utils/animationVariants';

const AboutContent = ({ onButtonClick, handleContactClick, handleResumeClick }) => {

  return (
    <motion.div {...slideInFromLeft}>
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
            Junior Software Engineer with hands-on experience building web and mobile apps. Skilled in designing, developing, and deploying applications using React, Node.js, Laravel, and cloud technologies. Experienced in implementing CI/CD pipelines, optimizing system performance, and collaborating within Agile teams.
            </div>
            <div className="About__text">
            Driven by a deep passion for software engineering and holding a state engineer diploma, I am eager to contribute to dynamic environments by building impactful and scalable software solutions.
            </div>
            <div className="About__text">
            Passionate about advancing digital healthcare technologies and leveraging Health IT and AI to drive innovation and improve healthcare outcomes.
            </div>
            {/* <button className="About__button" onClick={onButtonClick}>READ MORE</button> */}
            <AnimatedDots onButtonClick={onButtonClick}/>
          </div>
        </div>
        <button
          onClick={handleResumeClick}
          className="resume-button">
          <img
            src={`${process.env.PUBLIC_URL}/Icons/cv (1).png`}
            alt="CV"
            className="resume-image"
          />
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutContent;
