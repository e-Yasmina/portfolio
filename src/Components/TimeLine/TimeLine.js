import React from "react";
import "./TimeLine.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TimeLine = () => {
  const navigate = useNavigate();

  const timelineTexts = [
    "<h3>Final Year Project (PFE) at Magna Worldwide:</h3><br>Developed and deployed mobile applications to connect healthcare entities, improving medical service accessibility. Integrated secure and scalable backend solutions.",
    "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024):</h3><br><strong>Third Year (09/2023 - 07/2024)</strong><br>Specialized in <strong>Software Engineering (Génie Logiciel)</strong>:<br>Mobile application development<br>Cloud computing and virtualization<br>ERP systems<br>Software quality assurance, testing, and integration<br>Embedded and real-time systems.",
    "<h3>Internships (Summer 2024):</h3><br>Completed three internships gaining practical experience in software development and IT systems.",
    "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024):</h3><br><strong>Second Year (09/2022 - 07/2023)</strong><br>Advanced technical and professional development:<br>Java advanced programming<br>Data science with Python<br>Database administration<br>Machine Learning<br>Project management and software engineering<br>Web development with modern frameworks (Java EE, .NET)<br>Cybersecurity and cryptosystems.",
    "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024):</h3><br><strong>First Year (09/2021 - 07/2022)</strong><br>Studied core computer science subjects, including:<br>Advanced C programming and data structures<br>Computer architecture<br>Database systems and information systems<br>Networking fundamentals<br>Web technologies (PHP5)<br>Algorithmic complexity and advanced programming (C++)<br>Linux and system programming.",
  ];

  // Animation variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, x: -10 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 }, // Animate into position
    exit: { opacity: 0, x: 10 }, // Exit off-screen to the right
  };

  // Helper function to split text nodes into letters while preserving HTML structure
  const splitTextWithHTML = (htmlString) => {
    const container = document.createElement("div");
    container.innerHTML = htmlString;
  
    const traverse = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return Array.from(node.textContent).map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
          </motion.span>
        ));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName.toLowerCase() === "br") {
          // Handle <br> as a self-closing tag
          return <br key={node.outerHTML} />;
        }
        return React.createElement(
          node.tagName.toLowerCase(),
          { key: node.outerHTML },
          Array.from(node.childNodes).map((child) => traverse(child)) // Process child nodes
        );
      }
      return null;
    };
  
    return Array.from(container.childNodes).map((child) => traverse(child));
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Delay between each paragraph animation
          },
        },
        exit: { opacity: 0 },
      }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      {timelineTexts.map((text, index) => (
        <motion.div
          key={index}
          className="timePoint"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05, // Delay between each letter animation
              },
            },
            exit: { opacity: 0 },
          }}
        >
          {splitTextWithHTML(text)}
        </motion.div>
      ))}
    </motion.main>
  );
};

export default TimeLine;