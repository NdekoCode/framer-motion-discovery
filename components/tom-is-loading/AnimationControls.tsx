"use client";
import { motion, useAnimationControls, Variants } from 'framer-motion';

const controls: Variants = {
  initial: {
    rotate: "0deg",
    scale: 0.75,
    transition: {
      duration: 0.5,
    },
  },
  flip: {
    rotate: "360deg",
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const AnimationControls = () => {
  const animationControls = useAnimationControls();
  const handleClick = () => {
    animationControls.start("flip");
  };
  return (
    <>
      <motion.button
        layout
        onClick={handleClick}
        className="p-3 w-max hover:scale-105 will-change-transform active:scale-95 transition-transform duration-300 active:rotate-6 rounded bg-blue-500 text-white"
      >
        Flip It !
      </motion.button>
      <motion.div
        variants={controls}
        initial="initial"
        whileHover="flip"
        animate={animationControls}
        className="size-80 rounded-xl bg-gray-300"
      ></motion.div>
    </>
  );
};

export default AnimationControls;
