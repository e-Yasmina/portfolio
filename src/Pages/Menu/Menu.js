import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Menu.css"; // Assuming your CSS animations are here.

const Menu = () => {
  const items = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/notAvailablePage" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/exeperience&education" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },

  ];

  return (
    <motion.div
    initial={{ scale: 0, opacity: 0, rotateX: 0 }} // Start small, invisible, and no rotation
    animate={{ scale: 1, opacity: 1, rotateX: 1440}} // Grow to full size, visible, and flip
        transition={{
          duration: 2, // Animation duration
          ease: "easeInOut", // Smooth easing for the flipping effect
    }}>
    <ul className="menu">
      {items.map((item, index) => (
        <li key={index} className="menu-item">
          <Link
            to={item.path}
            className="menu-link"
            data-text={item.name}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
    </motion.div>
  );
};

export default Menu;
