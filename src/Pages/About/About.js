import React,{useState} from 'react';
import './About.css';


import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ImgHolder from '../../Components/ImgHolder/ImgHolder';
import AboutContent from '../../Components/AboutContent/AboutContent';

const Layout = () => {  
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const navigate = useNavigate(); 

  const triggerAnimation = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/Portfolio/menu"); 
    }, 2000); 
  };

  const handleContactClick = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/Portfolio/contact"); 
    }, 2000); 
    //navigate("/Portfolio/Contact");
  };
  
  const handleResumeClick = () => {
    navigate("/Portfolio/resume");
    // setIsAnimatingOut(true); // Start the exit animation
    // setTimeout(() => {
       
    // }, 2000); 
    //navigate("/Portfolio/Contact");
  };

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
    <AnimatePresence>
    {!isAnimatingOut && (
        <motion.div
        exit={{ x: '100vw', opacity: 0 }} // Start off-screen to the right
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 20, duration: 2 }}
        >
          <ImgHolder />
        </motion.div>
      )}
    </AnimatePresence>
    <AnimatePresence>
    {!isAnimatingOut && (
        <motion.div
        exit={{ x: '-100vw', opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 30, duration: 2 }}
      >
        <AboutContent onButtonClick={triggerAnimation} handleContactClick={handleContactClick} handleResumeClick={handleResumeClick}/>
      </motion.div>
      )}
    
    </AnimatePresence>
    </div>
    </motion.div>
  );
};

export default Layout;
