import { letterVariants} from "./utils/animationVariants";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to split text nodes into letters while preserving HTML structure
export const splitTextWithHTML = (htmlString) => {
    const container = document.createElement("div");
    container.innerHTML = htmlString;
  
    const traverse = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Process text nodes by splitting into words and letters
        return node.textContent.split(" ").map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            style={{ display: "inline-block", whiteSpace: "nowrap" }} // Keep words together
          >
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              key={`space-${wordIndex}`}
              style={{ display: "inline-block" }}
            >
              {"\u00A0"} {/* Add a space after each word */}
            </motion.span>
          </motion.span>
        ));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName.toLowerCase() === "br") {
          // Handle <br> as a self-closing tag
          return <br key={node.outerHTML} />;
        }
        // Process element nodes and recursively process their children
        return React.createElement(
          node.tagName.toLowerCase(),
          { key: node.outerHTML },
          Array.from(node.childNodes).map((child) => traverse(child)) // Recursively process child nodes
        );
      }
      return null;
    };
  
    return Array.from(container.childNodes).map((child) => traverse(child));
  };
  