"use client";
import { motion } from 'framer-motion';

const textAnimationVariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
  },
};
const TextAnimate = () => {
  return (
    <motion.h1
      variants={textAnimationVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration:1,
      }}
      className="text-gray-100 text-4xl"
    >
      Hi, it's H1 for animation using framer motion
    </motion.h1>
  );
};

export default TextAnimate;
