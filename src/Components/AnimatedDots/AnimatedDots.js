import React from "react";
import "./AnimatedDots.css";

const AnimatedDots = ({onButtonClick}) => {
  return (
    <div className="dots-container" onClick={onButtonClick}>
    </div>
  );
};

export default AnimatedDots;



// import React from "react";
// import { motion } from "framer-motion";
// import "./AnimatedDots.css";

// const AnimatedDots = () => {
//   const bounceVariants = {
//     animate: (i) => ({
//       y: [0, -10, 0], // Raise up by 10px and return to 0
//       transition: {
//         duration: 0.6,
//         repeat: Infinity, // Loop indefinitely
//         repeatType: "loop",
//         ease: "easeInOut", // Smooth easing
//         delay: i*0.6+i, // Delay each dot's animation
//       },
//     }),
//   };

//   return (
//     <div className="dots-container">
//       {Array(3)
//         .fill()
//         .map((_, index) => (
//           <motion.div
//             key={index}
//             className="dot"
//             custom={index} // Pass index as custom prop
//             variants={bounceVariants}
//             animate="animate"
//           />
//         ))}
//     </div>
//   );
// };

// export default AnimatedDots;
