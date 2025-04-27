const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
      },
    },
    exit: { opacity: 0 },
  };
  export const pageAnim = {
    initial:"hidden",
    animate:"visible",
    exit:"exit",
    variants:{pageVariants},
  };
  
  export const slideInFromRight = {
    initial: { x: '100vw', opacity: 0 },
    exit: { x: '100vw', opacity: 0 }, // Start off-screen to the right
    animate: { x: 0, opacity: 1 },   // Animate to its final position
    transition: { type: 'tween', stiffness: 20, duration: 2 },
  };
  
  export const slideInFromLeft = {
    initial: { x: '-100vw', opacity: 0 },
    exit: { x: '-100vw', opacity: 0 }, // Start off-screen to the left
    animate: { x: 0, opacity: 1 },    // Animate to its final position
    transition: { type: 'tween', stiffness: 30, duration: 2 },
  };

  export const alternateSlideIn = (key) => ({
    initial: { x: key % 2 === 0 ? '-100vw' : '100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: key % 2 === 0 ? '100vw' : '-100vw', opacity: 0 },
    transition: { type: 'tween', stiffness: 20, duration: 2 },
  });
  
  export const accordionTitleAnim = (index) => ({
    style:{fontFamily: "'Abril Fatface', cursive" },
    key:{index},
    variants:{
      hidden: { opacity: 0, x: -10, y: 10 },
      visible: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 10, y: -10 },
      },
    initial:"hidden",
    animate:"visible",
    exit:"exit",
    transition:{
     duration: 0.05,
     delay: index * 0.05,
    },
  });
  
  export const letterVariants = {
    hidden: { opacity: 0, x: -10 , y: 10}, // Start off-screen to the left
    visible: { opacity: 1, x: 0, y: 0 }, // Animate into position
    exit: { opacity: 0, x: 10, y: -10 }, // Exit off-screen to the right
  };

  export const letterAnim= (index) => ({
    key:{index},
    initial:"hidden",
    animate:"visible",
    exit:"exit",
    variants:{
      hidden: { opacity: 0 },
      visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter animation
        delay: index * 0.05, // Delay based on the index of the letter},
      },
      exit: { opacity: 0 },
    }},
  });

  export const menuAnim= ({
    initial:{ scale: 0, opacity: 0}, // Start small, invisible, and no rotation
    animate:{ scale: 1, opacity: 1}, // Grow to full size, visible, and flip
    transition:{
          duration: 2, // Animation duration
          ease: "easeInOut", // Smooth easing for the flipping effect
    },
  });