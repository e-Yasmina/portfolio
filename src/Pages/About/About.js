import React, { useState } from 'react';
import './About.css';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ImgHolder from '../../Components/ImgHolder/ImgHolder';
import AboutContent from '../../Components/AboutContent/AboutContent';
import { pageAnim, slideInFromRight, slideInFromLeft } from '../../utils/animationVariants';

const Layout = () => {  
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const navigate = useNavigate(); 

  const triggerAnimation = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/menu"); 
    }, 2000); 
  };

  const handleContactClick = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/contact"); 
    }, 2000); 
  };
  
  const handleResumeClick = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/resume");
    }, 2000); 
  };

  return (
    <motion.div {...pageAnim} className="motion_div">
      <div className="Layout">
        <AnimatePresence>
          {!isAnimatingOut && (
            <motion.div {...slideInFromRight}>
              <ImgHolder />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isAnimatingOut && (
            <motion.div {...slideInFromLeft}>
              <AboutContent 
                onButtonClick={triggerAnimation} 
                handleContactClick={handleContactClick} 
                handleResumeClick={handleResumeClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Layout;