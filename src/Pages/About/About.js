import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

import ImgHolder from '../../Components/ImgHolder/ImgHolder';
import AboutContent from '../../Components/AboutContent/AboutContent';

const Layout = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Delay between child animations
          },
        },
      }}
    >
    <div className="Layout">
      <ImgHolder />
      <AboutContent />
    </div>
    </motion.div>
  );
};

export default Layout;
