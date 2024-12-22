import React from 'react';
import { motion } from 'framer-motion';

import './ImgHolder.css';

const ImgHolder = () => {
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }} // Start off-screen to the left
      animate={{ x: 0, opacity: 1 }}       // Animate to its final position
      transition={{ type: 'tween', stiffness: 30, duration: 2 }}
      style={{
        position: 'relative',
        zIndex: 10, // Ensure this is always on top of other content
      }}
    >
    <div className="ImgHolder">
      <img 
        src="https://raw.githubusercontent.com/e-Yasmina/Portfolio/f984c5d0d28138e5efc030eca85046b31a0fcb90/public/Myimg1.png" 
        alt="My Image" 
      />
    </div>
    </motion.div>
  );
};

export default ImgHolder;
