import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Menu.css"; // Assuming your CSS animations are here.

const Menu = () => {
  const items = [
    { name: "Home", path: "/Portfolio/" },
    { name: "Projects", path: "/Portfolio/projects" },
    { name: "Skills", path: "/Portfolio/skills" },
    { name: "Education", path: "/Portfolio/education" },
    { name: "Blogs", path: "/Portfolio/blogs" },
    { name: "Contact", path: "/Portfolio/contact" },
    { name: "Resume", path: "/Portfolio/resume" },

  ];

  return (
    <motion.div
    initial={{ scale: 0, opacity: 0, rotateX: 0 }} // Start small, invisible, and no rotation
    animate={{ scale: 1, opacity: 1, rotateX: 1800}} // Grow to full size, visible, and flip
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
