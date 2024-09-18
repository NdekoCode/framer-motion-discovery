"use client";
import { motion, MotionConfig } from 'framer-motion';

const Gestures = () => {
  return (
    <>
      <MotionConfig transition={{
        duration:0.35,
        ease:'easeInOut'
      }}>
        <motion.button
          layout
          className="p-3 w-max hover:scale-105 will-change-transform active:scale-95 transition-transform duration-300 active:rotate-6 rounded bg-blue-500 text-white"
        >
          Click Me
        </motion.button>

        <motion.button
          layout
          whileHover={{
            scale:1.25,
            rotate:'3deg'
          }}
          whileTap={{
            scale:0.95,
            rotate:'-3deg'
          }}
          className="p-3 w-max rounded bg-red-500 text-white"
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </>
  );
};

export default Gestures;
