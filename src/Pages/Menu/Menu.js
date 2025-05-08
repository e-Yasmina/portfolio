import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence  } from "framer-motion";
import { menuAnim, alternateSlideIn} from "../../utils/animationVariants";
import "./Menu.css"; // Assuming your CSS animations are here.

const Menu = () => {
  const navigate = useNavigate();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const items = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/exeperience&education" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },

  ];

  const handleNavigation = (path) => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate(path); // Navigate to the new page after the animation
    }, 2000); // Adjust the timeout to match your animation duration
  };

  return (
    <motion.div {...menuAnim} >
      
    <ul className="menu">
      {items.map((item, index) => (
        <motion.div key={index} {...alternateSlideIn(index)}>
        <AnimatePresence>
        {!isAnimatingOut && (
        <motion.div {...alternateSlideIn(index)}>
        <li key={index} className="menu-item">
          {/* <Link
            to={item.path}
            className="menu-link"
            data-text={item.name}
          > 
            {item.name}
            </Link>*/}
          <button
            className="menu-link"
            data-text={item.name}
            onClick={() => handleNavigation(item.path)} // Trigger animation and navigation
            style={isAnimatingOut ? { pointerEvents: "none" } : {}} // Disable button during animation
          >
              {item.name}
          </button>
          
        </li>
        </motion.div>
        )}
        </AnimatePresence>
        </motion.div>
      ))}
      
    </ul>
    </motion.div>
  );
};

export default Menu;
