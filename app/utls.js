// Funky entrance animations for text
export const herotextAnimation = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2,
      duration: 1,
    },
  },
};

// Glowing effect for spiderverse vibe

export const buttonHover = {
  // Define keyframes for the glitch effect

  backgroundColor: "#000",
  textShadow: [
    "1px 1px 0px #00FF00, -1px -1px 0px #FF0000",
    "-2px 2px 0px #00FF00, 2px -2px 0px #FF0000",
    "2px -2px 0px #00FF00, -2px 2px 0px #FF0000",
    "-1px 1px 0px #FF00FF, 1px -1px 0px #00FFFF",
    "1px -1px 0px #00FF00, -1px 1px 0px #FF0000",
  ],

  transition: {
    duration: 0.4, // Quick duration for a glitch effect
    ease: "easeInOut",
    repeat: Infinity, // Continues while hovered
    repeatType: "reverse",
  },
};

// Styles for black overlay and general
export const styles = {
  blackOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay for better readability
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
};

export const secondDivAnimation = {
  hidden: { opacity: 1, y: 100 },
  visible: {
    opacity: 1,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2,
      duration: 1,
    },
  },
};
