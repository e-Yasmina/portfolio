import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import './AboutContent.css';
import Content from './Content';

const AboutContent = () => {

  return (
    <motion.div
    initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the right
    animate={{ x: 0, opacity: 1 }}       // Animate to its final position
    transition={{ type: 'tween', stiffness: 20, duration: 2 }}
    >
    <div className="About">
      <div className="About__wrp ">
        <div className="About__item ">
          <Content/>
        </div>
        </div>
    </div>
    </motion.div>
  );
};

export default AboutContent;
